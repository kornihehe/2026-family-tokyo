const mapSearch = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const lodgingUrl = "https://maps.app.goo.gl/Ex4w6B12ANb3qAen7";
const cityLodgingUrl = "https://maps.app.goo.gl/3XAM5BM4JGvse8Gx6";
const firstNightWalkUrl = "https://maps.app.goo.gl/uW5yAT3o2PX8bxLq8";
const icons = {
  mapPin: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>',
  plane: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-5-5 18-3-8-10-5Z"></path><path d="m13 16 5-5"></path></svg>',
  flightPlane: '<svg class="svg-icon flight-plane-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>',
  arrowUpRight: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>',
  check: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg>'
};
const weatherIcons = {
  sun: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="m16.24 7.76 1.42-1.42"></path><path d="M20 12h2"></path><path d="m16.24 16.24 1.42 1.42"></path><path d="M12 20v2"></path><path d="m6.34 17.66-1.42 1.42"></path><path d="M2 12h2"></path><path d="m6.34 6.34-1.42-1.42"></path></svg>',
  cloud: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>',
  rain: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 13a4 4 0 0 0-3.8-5A5 5 0 1 0 8 17h8a4 4 0 0 0 0-8Z"></path><path d="M8 19v2"></path><path d="M12 19v2"></path><path d="M16 19v2"></path></svg>',
  snow: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2-1 4 1 2 1-2-1-4Z"></path><path d="m12 16-1 2 1 4 1-4-1-2Z"></path><path d="m4.93 4.93 3.02 2.02 2.05-.13-1.1-1.74-3.97-.15Z"></path><path d="m13.99 17.18 2.05-.13 3.02 2.02-3.97-.15-1.1-1.74Z"></path><path d="m2 12 4-1 2 1-2 1-4-1Z"></path><path d="m16 12 2-1 4 1-4 1-2-1Z"></path><path d="m4.93 19.07 3.97-.15 1.1-1.74-2.05-.13-3.02 2.02Z"></path><path d="m13.99 6.82 1.1-1.74 3.97-.15-3.02 2.02-2.05-.13Z"></path></svg>',
  storm: '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path><path d="m13 14-2 4h3l-2 4"></path></svg>'
};

const supabaseUrl = "https://ioihxqrnbshmltdmebyb.supabase.co";
const supabasePublishableKey = "sb_publishable_ngy-PhrlRgozBEXUrjLG2w_tbJm_qL0";
const supabaseClient = window.supabase?.createClient ? window.supabase.createClient(supabaseUrl, supabasePublishableKey) : null;

const days = [
  {
    number: "01", date: "11/27", weekday: "FRI", title: "抵達成田・取車", subtitle: "先把方向盤握好，再往住宿出發。", flight: { airline: "TIGERAIR TAIWAN", code: "IT280", fromCode: "KHH", toCode: "NRT", from: "高雄國際機場", to: "東京成田機場", depart: "08:00", arrive: "12:10", duration: "4h10m", dateLabel: "27 Nov 2026 (FRI)", terminal: "Terminal 2" }, weather: { label: "成田", latitude: 35.772, longitude: 140.3929 }, items: [
      { time: "12:10", type: "ARRIVE", title: "抵達成田機場 T2", description: "去程 IT280 抵達成田機場第二航廈，先完成入境與領行李。", location: "成田國際機場 Terminal 2", detail: "IT280 · KHH → NRT", mapUrl: mapSearch("Narita International Airport Terminal 2") },
      { time: "13:30", type: "RENTAL", title: "Nissan Rent a Car 第二航廈", description: "前往 Nissan Rent a Car 辦理取車，確認車況、導航與還車資訊。", location: "", detail: "", mapUrl: mapSearch("Nissan Rent a Car Narita Airport Terminal 2") },
      { time: "16:00", type: "DRIVE", title: "開車前往住宿", description: "離開成田後前往第一晚住宿，晚上以休息和整理行李為主。", location: "第一晚住宿", detail: "Google Maps 住宿連結", mapUrl: lodgingUrl },
      { time: "20:00", type: "CHECK-IN", title: "入住第一晚住宿", description: "把行李放下，確認隔天前往富士急的路線與出發時間。", location: "第一晚住宿", detail: "住宿地點", mapUrl: lodgingUrl },
      { time: "AFTER", type: "WALK", title: "Check-in 後散步", description: "入住後到你提供的地點走走，作為抵達日本的第一晚散步行程。", location: "第一晚住宿附近散步點", detail: "Check-in 後", mapUrl: firstNightWalkUrl }
    ]
  },
  {
    number: "02", date: "11/28", weekday: "SAT", title: "富士急一日", subtitle: "從早上九點玩到晚上七點。", weather: { label: "富士急", latitude: 35.4881, longitude: 138.7805 }, items: [
      { time: "07:00", type: "DRIVE", title: "開車前往富士急樂園", description: "從住宿出發前往富士急，建議提早出發並預留停車時間。", location: "富士急樂園", detail: "導航至遊樂園", mapUrl: mapSearch("Fuji-Q Highland") },
      { time: "09:00", type: "PARK", title: "富士急樂園", description: "9:00–19:00 玩一整天，入園後先確認想玩的設施與排隊狀況。", location: "富士急樂園", detail: "09:00–19:00", mapUrl: mapSearch("Fuji-Q Highland") },
      { time: "19:00", type: "DRIVE", title: "開回東京市區", description: "離開富士急後直接往新宿還車點移動，建議依即時路況調整。", location: "新宿 Nissan Rent a Car", detail: "東京市區還車", mapUrl: mapSearch("Nissan Rent a Car Shinjuku Tokyo") },
      { time: "20:00", type: "RETURN", title: "新宿還車", description: "已預約晚上八點還車，完成驗車後前往市區住宿。", location: "新宿 Nissan Rent a Car", detail: "預約 20:00", mapUrl: mapSearch("Nissan Rent a Car Shinjuku Tokyo") },
      { time: "21:00", type: "CHECK-IN", title: "入住東京市區", description: "11/28 起住在同一個地點，接下來幾天以東京市區移動為主。", location: "東京市區住宿", detail: "住到離開", mapUrl: cityLodgingUrl }
    ]
  },
  {
    number: "03", date: "11/29", weekday: "SUN", title: "東京自由日", subtitle: "留一格空白，等你決定想去哪裡。", weather: { label: "東京", latitude: 35.6762, longitude: 139.6503 }, items: [
      { time: "ALL DAY", type: "OPEN", title: "東京自由安排", description: "目前尚未指定景點；可以之後再補上，網站會一起加上 Google Maps。", location: "待安排", detail: "尚未決定" }
    ]
  },
  {
    number: "04", date: "11/30", weekday: "MON", title: "東京自由日", subtitle: "不排滿，也是一種行程。", weather: { label: "東京", latitude: 35.6762, longitude: 139.6503 }, items: [
      { time: "ALL DAY", type: "OPEN", title: "東京自由安排", description: "目前尚未指定景點；可以之後再補上，網站會一起加上 Google Maps。", location: "待安排", detail: "尚未決定" }
    ]
  },
  {
    number: "05", date: "12/01", weekday: "TUE", title: "Pokémon Kanto", subtitle: "把寶可夢行程留給東京的最後一天。", weather: { label: "東京", latitude: 35.6762, longitude: 139.6503 }, items: [
      { time: "TBD", type: "POKÉMON", title: "Pokémon Kanto（分店待確認）", description: "前往 Pokémon Kanto；目前先用 Google Maps 搜尋連結，等確認確切分店後再替換。", location: "Pokémon Kanto · Tokyo", detail: "Google Maps 搜尋", mapUrl: mapSearch("Pokemon Kanto Tokyo") }
    ]
  },
  {
    number: "06", date: "12/02", weekday: "WED", title: "回到成田", subtitle: "帶著戰利品，回到第二航廈。", flight: { airline: "TIGERAIR TAIWAN", code: "IT281", fromCode: "NRT", toCode: "KHH", from: "東京成田機場", to: "高雄國際機場", depart: "11:25", arrive: "15:05", duration: "3h40m", dateLabel: "02 Dec 2026 (WED)", terminal: "Terminal 2" }, weather: { label: "成田", latitude: 35.772, longitude: 140.3929 }, items: [
      { time: "07:00", type: "DRIVE", title: "前往成田機場 T2", description: "從東京市區住宿出發前往成田機場第二航廈，預留足夠交通緩衝。", location: "成田國際機場 Terminal 2", detail: "Google Maps 導航", mapUrl: mapSearch("Narita International Airport Terminal 2") },
      { time: "11:25", type: "DEPART", title: "回程 IT281", description: "回程航班從成田機場第二航廈出發，目的地為高雄國際機場。", location: "成田國際機場 Terminal 2", detail: "NRT → KHH · Terminal 2", mapUrl: mapSearch("Narita International Airport Terminal 2") }
    ]
  }
];

const checklistGroups = [
  ["航班與租車", ["去程 IT280／11-27 12:10 抵達", "Nissan Rent a Car 取車資訊", "新宿還車預約 11-28 20:00", "回程 IT281／12-02 11:25 起飛"]],
  ["住宿與移動", ["第一晚住宿 Google Maps 連結", "東京市區住宿 Google Maps 連結", "駕照", "日文譯本／租車文件", "導航與行動電源"]]
];

const dayPicker = document.querySelector("#dayPicker");
const flightInfo = document.querySelector("#flightInfo");
const weatherSummary = document.querySelector("#weatherSummary");
const timeline = document.querySelector("#timeline");
const toast = document.querySelector("#toast");
const addItineraryButton = document.querySelector("#addItineraryButton");
const itineraryDialog = document.querySelector("#itineraryDialog");
const itineraryForm = document.querySelector("#itineraryForm");
const itineraryDialogKicker = document.querySelector("#itineraryDialogKicker");
const itineraryDialogTitle = document.querySelector("#itineraryDialogTitle");
const itineraryDate = document.querySelector("#itineraryDate");
const itineraryTime = document.querySelector("#itineraryTime");
const itineraryType = document.querySelector("#itineraryType");
const itineraryTitle = document.querySelector("#itineraryTitle");
const itineraryDescription = document.querySelector("#itineraryDescription");
const itineraryLocation = document.querySelector("#itineraryLocation");
const itineraryDetail = document.querySelector("#itineraryDetail");
const itineraryMapUrl = document.querySelector("#itineraryMapUrl");
const saveItineraryButton = document.querySelector("#saveItineraryButton");
let selectedDay = 0;
let checkedItems = JSON.parse(localStorage.getItem("travel-journal-checklist") || "[]");
let itineraryOverrides = JSON.parse(localStorage.getItem("travel-journal-itinerary-overrides") || "{}");
const weatherCache = new Map();
let remoteItems = [];
let renderedTimelineItems = new Map();
let editingItem = null;

function dateForDay(day) {
  const [month, date] = day.date.split("/");
  return `2026-${month.padStart(2, "0")}-${date.padStart(2, "0")}`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[character]));
}

function safeMapUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : "";
  } catch (error) {
    return "";
  }
}

function remoteItemsForDay(day) {
  return remoteItems
    .filter((item) => item.trip_date === dateForDay(day))
    .map((item) => ({
      id: item.id,
      editKey: `remote-${item.id}`,
      source: "remote",
      tripDate: item.trip_date,
      time: item.time_label || "TBD",
      type: item.type || "OPEN",
      title: item.title || "未命名行程",
      description: item.description || "",
      location: item.location || "",
      detail: item.detail || "",
      mapUrl: safeMapUrl(item.map_url || "")
    }));
}

function fixedItemsForDay(day, dayIndex) {
  return day.items
    .filter((item) => !(day.flight && ["ARRIVE", "DEPART"].includes(item.type)))
    .map((item) => {
      const itemIndex = day.items.indexOf(item);
      const editKey = `fixed-${dayIndex}-${itemIndex}`;
      const override = itineraryOverrides[editKey] || {};
      return {
        ...item,
        ...override,
        editKey,
        source: "fixed",
        tripDate: dateForDay(day),
        mapUrl: Object.hasOwn(override, "mapUrl") ? override.mapUrl : safeMapUrl(item.mapUrl || "")
      };
    });
}

function renderDayPicker() {
  dayPicker.innerHTML = days.map((day, index) => `
    <button class="day-button ${index === selectedDay ? "active" : ""}" data-day="${index}" role="tab" aria-selected="${index === selectedDay}" type="button">
      <span>DAY ${Number(day.number)}</span><strong>${day.date.split("/")[1]}</strong><small>${day.weekday}</small>
    </button>`).join("");
  dayPicker.querySelectorAll(".day-button").forEach((button) => button.addEventListener("click", () => {
    selectedDay = Number(button.dataset.day);
    renderDayPicker();
    renderDay();
  }));
}

function renderDay() {
  const day = days[selectedDay];
  flightInfo.innerHTML = day.flight ? `<article class="flight-card"><div class="flight-card-head"><span class="flight-airline"><strong>${day.flight.airline}</strong><b>·</b><span>${day.flight.code}</span></span></div><div class="flight-route"><div class="flight-endpoint"><strong class="flight-airport">${day.flight.fromCode}</strong><span class="flight-time">${day.flight.depart}</span></div><span class="flight-route-line" aria-hidden="true">${icons.flightPlane}<small>${day.flight.duration}</small></span><div class="flight-endpoint flight-arrival"><strong class="flight-airport">${day.flight.toCode}</strong><span class="flight-time">${day.flight.arrive}</span></div></div><div class="flight-card-foot"><span>${day.flight.dateLabel}</span><span>${day.flight.terminal}</span></div></article>` : "";
  weatherSummary.innerHTML = `<div class="weather-summary-inner" data-weather="${selectedDay}"><span class="weather-icon">${weatherIcons.cloud}</span><span class="weather-place">${day.weather.label}</span><strong class="weather-temp">載入中</strong><span class="weather-note">正在查詢預報</span></div>`;
  loadWeather(day, selectedDay);
  const timelineItems = [...fixedItemsForDay(day, selectedDay), ...remoteItemsForDay(day)];
  renderedTimelineItems = new Map(timelineItems.map((item) => [item.editKey, item]));
  timeline.innerHTML = timelineItems.map((item, index) => {
    const mapUrl = safeMapUrl(item.mapUrl || "");
    const mapLink = mapUrl ? `<a class="map-link" href="${escapeHtml(mapUrl)}" aria-label="開啟 Google Maps" title="開啟 Google Maps">${icons.mapPin}<span class="sr-only">Google Maps</span></a>` : "";
    const itemMeta = [item.location, item.detail].filter(Boolean).map((value) => `<span>${escapeHtml(value)}</span>`).join("");
    return `<article class="timeline-item" style="animation-delay:${index * 70}ms">
      <time class="timeline-time">${escapeHtml(item.time)}</time>
      <div class="timeline-card" data-item-key="${escapeHtml(item.editKey)}" data-item-source="${item.source}" role="button" tabindex="0" aria-label="編輯${escapeHtml(item.title)}">
        <span class="item-type">${escapeHtml(item.type)}</span><div class="timeline-title-row"><h4>${escapeHtml(item.title)}</h4>${mapLink}</div>
        <p>${escapeHtml(item.description)}</p>
        ${itemMeta ? `<div class="item-meta">${itemMeta}</div>` : ""}
      </div>
    </article>`;
  }).join("");
}

function weatherDescription(code) {
  if (code === 0) return "晴朗";
  if ([1, 2].includes(code)) return "晴時多雲";
  if (code === 3) return "多雲";
  if ([45, 48].includes(code)) return "有霧";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "有雨";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "降雪";
  if ([95, 96, 99].includes(code)) return "雷雨";
  return "天氣資訊";
}

function weatherIcon(code) {
  if (code === 0) return weatherIcons.sun;
  if ([1, 2, 3, 45, 48].includes(code)) return weatherIcons.cloud;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return weatherIcons.snow;
  if ([95, 96, 99].includes(code)) return weatherIcons.storm;
  return weatherIcons.rain;
}

function setWeatherUnavailable(state) {
  if (!state) return;
  state.querySelector(".weather-icon").innerHTML = weatherIcons.cloud;
  state.querySelector(".weather-temp").textContent = "待發布";
  state.querySelector(".weather-note").textContent = "出發前 7 天更新";
}

function applyWeather(state, forecast, date) {
  if (!state || !forecast?.daily) return;
  const position = forecast.daily.time.indexOf(date);
  if (position < 0 || forecast.daily.weather_code?.[position] == null) {
    setWeatherUnavailable(state);
    return;
  }
  const code = forecast.daily.weather_code[position];
  const max = Math.round(forecast.daily.temperature_2m_max[position]);
  const min = Math.round(forecast.daily.temperature_2m_min[position]);
  const rain = forecast.daily.precipitation_probability_max?.[position];
  state.querySelector(".weather-icon").innerHTML = weatherIcon(code);
  state.querySelector(".weather-temp").textContent = `${max}° / ${min}°`;
  state.querySelector(".weather-note").textContent = `${weatherDescription(code)}${rain == null ? "" : ` · 降雨 ${Math.round(rain)}%`}`;
}

async function loadWeather(day, dayIndex) {
  const state = document.querySelector(`[data-weather="${dayIndex}"]`);
  if (!state) return;
  const dateParts = day.date.split("/");
  const date = `2026-${dateParts[0]}-${dateParts[1]}`;
  const cacheKey = `${day.weather.latitude},${day.weather.longitude}`;
  if (weatherCache.has(cacheKey)) {
    applyWeather(state, weatherCache.get(cacheKey), date);
    return;
  }
  const params = new URLSearchParams({
    latitude: day.weather.latitude,
    longitude: day.weather.longitude,
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max",
    timezone: "Asia/Tokyo",
    start_date: "2026-11-27",
    end_date: "2026-12-02"
  });
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error("Weather forecast unavailable");
    const forecast = await response.json();
    weatherCache.set(cacheKey, forecast);
    applyWeather(state, forecast, date);
  } catch (error) {
    setWeatherUnavailable(state);
  }
}

function renderChecklist() {
  const checklist = document.querySelector("#checklist");
  checklist.innerHTML = checklistGroups.map(([group, items]) => `<div class="check-group">${group}</div>${items.map((item) => {
    const key = item.replaceAll("／", "/");
    const isChecked = checkedItems.includes(key);
    return `<label class="check-item"><input type="checkbox" data-check="${key}" ${isChecked ? "checked" : ""} /><span class="check-box">${icons.check}</span><span class="check-label">${item}</span></label>`;
  }).join("")}`).join("");
  checklist.querySelectorAll("[data-check]").forEach((input) => input.addEventListener("change", () => {
    const key = input.dataset.check;
    checkedItems = input.checked ? [...checkedItems, key] : checkedItems.filter((item) => item !== key);
    localStorage.setItem("travel-journal-checklist", JSON.stringify(checkedItems));
    showToast(input.checked ? "已加入完成清單" : "已從清單移除");
  }));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 1800);
}

async function loadRemoteItems() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient
    .from("itinerary_items")
    .select("*")
    .order("trip_date", { ascending: true })
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (!error && Array.isArray(data)) {
    remoteItems = data;
    renderDay();
  }
}

function setDialogMode(isEditing) {
  itineraryDialogKicker.textContent = isEditing ? "EDIT ITINERARY" : "ITINERARY";
  itineraryDialogTitle.textContent = isEditing ? "編輯行程" : "新增行程";
  saveItineraryButton.textContent = isEditing ? "儲存變更" : "儲存行程";
}

function openItineraryDialog() {
  editingItem = null;
  itineraryForm.reset();
  itineraryDate.disabled = false;
  itineraryDate.value = dateForDay(days[selectedDay]);
  itineraryType.value = "OPEN";
  setDialogMode(false);
  itineraryDialog.showModal();
  requestAnimationFrame(() => itineraryTitle.focus());
}

function openEditItineraryDialog(editKey) {
  const item = renderedTimelineItems.get(editKey);
  if (!item) return;
  editingItem = { source: item.source, id: item.id, editKey: item.editKey };
  itineraryForm.reset();
  itineraryDate.value = item.tripDate || dateForDay(days[selectedDay]);
  itineraryTime.value = item.time || "";
  itineraryType.value = item.type || "OPEN";
  itineraryTitle.value = item.title || "";
  itineraryDescription.value = item.description || "";
  itineraryLocation.value = item.location || "";
  itineraryDetail.value = item.detail || "";
  itineraryMapUrl.value = item.mapUrl || "";
  itineraryDate.disabled = item.source === "fixed";
  setDialogMode(true);
  itineraryDialog.showModal();
  requestAnimationFrame(() => itineraryTitle.focus());
}

function closeItineraryDialog() {
  itineraryDialog.close();
  editingItem = null;
  itineraryDate.disabled = false;
  setDialogMode(false);
}

addItineraryButton.addEventListener("click", openItineraryDialog);
timeline.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")) return;
  const card = event.target.closest(".timeline-card");
  if (card) openEditItineraryDialog(card.dataset.itemKey);
});
timeline.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key)) return;
  if (event.target instanceof Element && event.target.closest("a")) return;
  const card = event.target.closest(".timeline-card");
  if (!card) return;
  event.preventDefault();
  openEditItineraryDialog(card.dataset.itemKey);
});
document.querySelector("#closeItineraryDialog").addEventListener("click", closeItineraryDialog);
document.querySelector("#cancelItineraryDialog").addEventListener("click", closeItineraryDialog);
itineraryDialog.addEventListener("click", (event) => {
  if (event.target === itineraryDialog) closeItineraryDialog();
});
itineraryForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = itineraryTitle.value.trim();
  const mapInput = itineraryMapUrl.value.trim();
  const mapUrl = mapInput ? safeMapUrl(mapInput) : null;
  if (!title || (mapInput && !mapUrl)) {
    showToast(mapInput && !mapUrl ? "請貼上有效的 Google Maps 連結" : "請填寫行程標題");
    return;
  }
  const payload = {
    trip_date: itineraryDate.value,
    time_label: itineraryTime.value.trim() || "TBD",
    type: itineraryType.value,
    title,
    description: itineraryDescription.value.trim(),
    location: itineraryLocation.value.trim(),
    detail: itineraryDetail.value.trim(),
    map_url: mapUrl
  };

  if (editingItem?.source === "fixed") {
    itineraryOverrides[editingItem.editKey] = {
      time: payload.time_label,
      type: payload.type,
      title: payload.title,
      description: payload.description,
      location: payload.location,
      detail: payload.detail,
      mapUrl: mapUrl || ""
    };
    localStorage.setItem("travel-journal-itinerary-overrides", JSON.stringify(itineraryOverrides));
    renderDay();
    closeItineraryDialog();
    showToast("行程已更新（保存在此瀏覽器）");
    return;
  }

  if (!supabaseClient) {
    showToast("資料庫尚未連線");
    return;
  }

  saveItineraryButton.disabled = true;
  if (editingItem?.source === "remote") {
    const { data, error } = await supabaseClient
      .from("itinerary_items")
      .update(payload)
      .eq("id", editingItem.id)
      .select()
      .single();
    saveItineraryButton.disabled = false;
    if (error) {
      showToast("儲存失敗，請稍後再試");
      return;
    }
    remoteItems = remoteItems.map((item) => item.id === data.id ? data : item);
    selectedDay = Math.max(0, days.findIndex((day) => dateForDay(day) === data.trip_date));
    renderDayPicker();
    renderDay();
    closeItineraryDialog();
    showToast("行程已更新");
    return;
  }

  const { data, error } = await supabaseClient
    .from("itinerary_items")
    .insert({ ...payload, sort_order: 100 })
    .select()
    .single();
  saveItineraryButton.disabled = false;
  if (error) {
    showToast("新增失敗，請稍後再試");
    return;
  }
  remoteItems = [...remoteItems, data];
  selectedDay = Math.max(0, days.findIndex((day) => dateForDay(day) === data.trip_date));
  renderDayPicker();
  renderDay();
  closeItineraryDialog();
  showToast("行程已新增");
});

function switchView(view) {
  document.querySelectorAll("[data-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === view));
  document.querySelectorAll("[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  if (view !== "itinerary") window.scrollTo({ top: document.querySelector(`[data-panel="${view}"]`).offsetTop - 26, behavior: "smooth" });
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
renderDayPicker();
renderDay();
renderChecklist();
loadRemoteItems();
