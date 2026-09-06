const GOOGLE_AUTOCOMPLETE_URL = "https://places.googleapis.com/v1/places:autocomplete";
const MAX_INPUT_LENGTH = 120;
const MAX_REQUESTS_PER_MINUTE = 60;
const requestBuckets = new Map();

function allowedOrigins() {
  const origins = new Set([
    "https://travel-japan-alpha.vercel.app",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
    process.env.APP_ORIGIN,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""
  ].filter(Boolean));
  return origins;
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  return String(forwarded || req.socket?.remoteAddress || "unknown").split(",")[0].trim();
}

function isRateLimited(ip) {
  const now = Date.now();
  const bucket = requestBuckets.get(ip);
  if (!bucket || now - bucket.startedAt >= 60_000) {
    requestBuckets.set(ip, { startedAt: now, count: 1 });
    return false;
  }
  bucket.count += 1;
  return bucket.count > MAX_REQUESTS_PER_MINUTE;
}

function sendJson(res, status, body, origin = "") {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.status(status).json(body);
}

function normalizeSuggestion(suggestion) {
  const prediction = suggestion?.placePrediction;
  if (!prediction?.placeId) return null;
  return {
    placeId: String(prediction.placeId),
    text: String(prediction.text?.text || prediction.structuredFormat?.mainText?.text || ""),
    mainText: String(prediction.structuredFormat?.mainText?.text || prediction.text?.text || ""),
    secondaryText: String(prediction.structuredFormat?.secondaryText?.text || "")
  };
}

module.exports = async function handler(req, res) {
  const origin = String(req.headers.origin || "");
  const origins = allowedOrigins();

  if (!origins.has(origin)) {
    sendJson(res, 403, { error: "ORIGIN_NOT_ALLOWED" });
    return;
  }

  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Vary", "Origin");
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { error: "METHOD_NOT_ALLOWED" }, origin);
    return;
  }

  if (isRateLimited(getClientIp(req))) {
    sendJson(res, 429, { error: "RATE_LIMITED" }, origin);
    return;
  }

  const input = typeof req.body?.input === "string" ? req.body.input.trim() : "";
  const sessionToken = typeof req.body?.sessionToken === "string" ? req.body.sessionToken.trim() : "";
  if (input.length < 2 || input.length > MAX_INPUT_LENGTH) {
    sendJson(res, 400, { error: "INVALID_INPUT" }, origin);
    return;
  }
  if (sessionToken && !/^[A-Za-z0-9_-]{8,200}$/.test(sessionToken)) {
    sendJson(res, 400, { error: "INVALID_SESSION_TOKEN" }, origin);
    return;
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    sendJson(res, 503, { error: "PLACES_NOT_CONFIGURED" }, origin);
    return;
  }

  try {
    const googleResponse = await fetch(GOOGLE_AUTOCOMPLETE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "suggestions.placePrediction.placeId,suggestions.placePrediction.text,suggestions.placePrediction.structuredFormat"
      },
      body: JSON.stringify({
        input,
        includedRegionCodes: ["jp"],
        languageCode: "zh-TW",
        regionCode: "TW",
        ...(sessionToken ? { sessionToken } : {})
      })
    });

    if (!googleResponse.ok) {
      console.error("Google Places autocomplete request failed", googleResponse.status);
      sendJson(res, 502, { error: "PLACE_SEARCH_FAILED" }, origin);
      return;
    }

    const googleData = await googleResponse.json();
    const suggestions = (Array.isArray(googleData.suggestions) ? googleData.suggestions : [])
      .map(normalizeSuggestion)
      .filter(Boolean)
      .slice(0, 5);
    sendJson(res, 200, { suggestions }, origin);
  } catch (error) {
    console.error("Google Places autocomplete request error", error instanceof Error ? error.message : "unknown error");
    sendJson(res, 502, { error: "PLACE_SEARCH_FAILED" }, origin);
  }
};
