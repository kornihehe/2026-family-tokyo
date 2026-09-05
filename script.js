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

const dayPicker = document.querySelector("#dayPicker");
const flightInfo = document.querySelector("#flightInfo");
const siteHeader = document.querySelector(".site-header");
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
const bookingGrid = document.querySelector("#bookingGrid");
const addBookingButton = document.querySelector("#addBookingButton");
const bookingDialog = document.querySelector("#bookingDialog");
const bookingForm = document.querySelector("#bookingForm");
const bookingDialogKicker = document.querySelector("#bookingDialogKicker");
const bookingDialogTitle = document.querySelector("#bookingDialogTitle");
const bookingSection = document.querySelector("#bookingSection");
const bookingPeriod = document.querySelector("#bookingPeriod");
const bookingTitle = document.querySelector("#bookingTitle");
const bookingRoute = document.querySelector("#bookingRoute");
const bookingMeta = document.querySelector("#bookingMeta");
const bookingMapUrl = document.querySelector("#bookingMapUrl");
const bookingSiteUrl = document.querySelector("#bookingSiteUrl");
const saveBookingButton = document.querySelector("#saveBookingButton");
let selectedDay = 0;
let checklistItemsState = [];
let checklistGroupNames = [];
let itineraryOverrides = {};
const weatherCache = new Map();
let remoteItems = [];
let renderedTimelineItems = new Map();
let editingItem = null;
let bookingItemsState = [];
let editingBookingId = null;
let bookingSwipe = null;
let suppressBookingClick = false;

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

function bookingItems() {
  return bookingItemsState;
}

function normalizeBookingRow(row) {
  return {
    id: row.id,
    section: row.section || "BOOKING",
    period: row.period || "",
    title: row.title || "未命名預定",
    route: row.route || "",
    meta: Array.isArray(row.meta) ? row.meta : [],
    mapUrl: row.map_url || "",
    siteUrl: row.site_url || "",
    accent: Boolean(row.accent)
  };
}

function renderBookingCard(item) {
  const mapLink = item.mapUrl
    ? `<a class="booking-map-icon" href="${escapeHtml(item.mapUrl)}" target="_blank" rel="noreferrer" aria-label="開啟 ${escapeHtml(item.title)} Google Maps" title="開啟 Google Maps">${icons.mapPin}</a>`
    : "";
  const siteLink = item.siteUrl
    ? `<a class="site-link" href="${escapeHtml(item.siteUrl)}" target="_blank" rel="noreferrer">官方網站 ${icons.arrowUpRight}</a>`
    : "";
  const meta = Array.isArray(item.meta) ? item.meta.filter(Boolean).map((value) => `<span>${escapeHtml(value)}</span>`).join("") : "";
  const route = escapeHtml(item.route || "").replace(/\n/g, "<br />");
  return `<div class="booking-card-shell" data-booking-shell="${escapeHtml(item.id)}">
    <button class="booking-delete" type="button" data-booking-delete="${escapeHtml(item.id)}" aria-label="刪除${escapeHtml(item.title)}">刪除</button>
    <article class="booking-card${item.accent ? " booking-card-accent" : ""}" data-booking-id="${escapeHtml(item.id)}" tabindex="0" aria-label="編輯${escapeHtml(item.title)}">
      <div class="booking-card-head"><span>${escapeHtml(item.section || "BOOKING")}</span><span>${escapeHtml(item.period || "")}</span></div>
      <div class="booking-title-row"><h3>${escapeHtml(item.title)}</h3>${mapLink}</div>
      <p class="booking-route">${route}</p>
      <div class="booking-meta">${meta}</div>
      ${siteLink ? `<div class="booking-links">${siteLink}</div>` : ""}
    </article>
  </div>`;
}

function renderBookings() {
  bookingGrid.innerHTML = bookingItems().map(renderBookingCard).join("");
}

async function loadBookings() {
  if (!supabaseClient) {
    bookingItemsState = [];
    renderBookings();
    showToast("資料庫尚未連線");
    return;
  }
  const { data, error } = await supabaseClient
    .from("booking_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) {
    bookingItemsState = [];
    renderBookings();
    showToast("預定資料載入失敗");
    return;
  }
  bookingItemsState = (data || []).map(normalizeBookingRow);
  renderBookings();
}

function subscribeToBookings() {
  if (!supabaseClient) return;
  supabaseClient
    .channel("booking-items-sync")
    .on("postgres_changes", { event: "*", schema: "public", table: "booking_items" }, loadBookings)
    .subscribe();
}

function setBookingDialogMode(isEditing) {
  bookingDialogKicker.textContent = isEditing ? "EDIT BOOKING" : "BOOKING";
  bookingDialogTitle.textContent = isEditing ? "編輯預定" : "新增預定";
  saveBookingButton.textContent = isEditing ? "儲存變更" : "儲存預定";
}

function openBookingDialog(id = null) {
  const item = id ? bookingItems().find((booking) => booking.id === id) : null;
  if (id && !item) return;
  editingBookingId = id;
  bookingForm.reset();
  bookingSection.value = item?.section || "NEW BOOKING";
  bookingPeriod.value = item?.period || "";
  bookingTitle.value = item?.title || "";
  bookingRoute.value = item?.route || "";
  bookingMeta.value = item?.meta?.join("\n") || "";
  bookingMapUrl.value = item?.mapUrl || "";
  bookingSiteUrl.value = item?.siteUrl || "";
  setBookingDialogMode(Boolean(item));
  bookingDialog.showModal();
  requestAnimationFrame(() => bookingTitle.focus());
}

function closeBookingDialog() {
  bookingDialog.close();
  editingBookingId = null;
  setBookingDialogMode(false);
}

async function deleteBookingItem(id, shell) {
  shell.classList.add("is-removing");
  window.setTimeout(async () => {
    const { error } = await supabaseClient.from("booking_items").delete().eq("id", id);
    if (error) {
      shell.classList.remove("is-removing");
      showToast("刪除失敗，請稍後再試");
      return;
    }
    bookingItemsState = bookingItemsState.filter((item) => item.id !== id);
    renderBookings();
    showToast("已刪除預定");
  }, 280);
}

addBookingButton.addEventListener("click", () => openBookingDialog());
bookingGrid.addEventListener("click", (event) => {
  if (suppressBookingClick) {
    event.preventDefault();
    suppressBookingClick = false;
    return;
  }
  const deleteButton = event.target.closest("[data-booking-delete]");
  if (deleteButton) {
    deleteBookingItem(deleteButton.dataset.bookingDelete, deleteButton.closest(".booking-card-shell"));
    return;
  }
  if (event.target.closest("a")) return;
  const card = event.target.closest(".booking-card");
  if (!card) return;
  const shell = card.closest(".booking-card-shell");
  if (shell.classList.contains("is-swiped")) {
    shell.classList.remove("is-swiped");
    return;
  }
  openBookingDialog(card.dataset.bookingId);
});
bookingGrid.addEventListener("keydown", (event) => {
  if (!['Enter', ' '].includes(event.key) || event.target.closest("a")) return;
  const card = event.target.closest(".booking-card");
  if (!card) return;
  event.preventDefault();
  openBookingDialog(card.dataset.bookingId);
});
bookingGrid.addEventListener("pointerdown", (event) => {
  const card = event.target.closest(".booking-card");
  if (!card || event.target.closest("a") || (event.pointerType === "mouse" && event.button !== 0)) return;
  bookingSwipe = { card, shell: card.closest(".booking-card-shell"), pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false };
  card.setPointerCapture?.(event.pointerId);
});
bookingGrid.addEventListener("pointermove", (event) => {
  if (!bookingSwipe || event.pointerId !== bookingSwipe.pointerId) return;
  const deltaX = event.clientX - bookingSwipe.startX;
  const deltaY = event.clientY - bookingSwipe.startY;
  if (Math.abs(deltaX) < 12 || Math.abs(deltaX) < Math.abs(deltaY)) return;
  event.preventDefault();
  bookingSwipe.moved = true;
  bookingSwipe.card.classList.add("is-swiping");
  const offset = Math.max(-96, Math.min(0, deltaX));
  bookingSwipe.card.style.transform = `translateX(${offset}px)`;
});
bookingGrid.addEventListener("pointerup", (event) => {
  if (!bookingSwipe || event.pointerId !== bookingSwipe.pointerId) return;
  if (bookingSwipe.moved) {
    bookingSwipe.card.style.removeProperty("transform");
    bookingSwipe.card.classList.remove("is-swiping");
    bookingSwipe.shell.classList.toggle("is-swiped", event.clientX - bookingSwipe.startX < -52);
    suppressBookingClick = true;
    window.setTimeout(() => { suppressBookingClick = false; }, 450);
  }
  bookingSwipe = null;
});
bookingGrid.addEventListener("pointercancel", () => {
  bookingSwipe?.card.style.removeProperty("transform");
  bookingSwipe?.card.classList.remove("is-swiping");
  bookingSwipe = null;
});

document.querySelector("#closeBookingDialog").addEventListener("click", closeBookingDialog);
document.querySelector("#cancelBookingDialog").addEventListener("click", closeBookingDialog);
bookingDialog.addEventListener("click", (event) => {
  if (event.target === bookingDialog) closeBookingDialog();
});
bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = bookingTitle.value.trim();
  const mapInput = bookingMapUrl.value.trim();
  const siteInput = bookingSiteUrl.value.trim();
  const mapUrl = mapInput ? safeMapUrl(mapInput) : "";
  const siteUrl = siteInput ? safeMapUrl(siteInput) : "";
  if (!title || (mapInput && !mapUrl) || (siteInput && !siteUrl)) {
    showToast(!title ? "請填寫預定標題" : "請貼上有效的連結");
    return;
  }
  const payload = {
    section: bookingSection.value.trim() || "BOOKING",
    period: bookingPeriod.value.trim(),
    title,
    route: bookingRoute.value.trim(),
    meta: bookingMeta.value.split("\n").map((value) => value.trim()).filter(Boolean),
    map_url: mapUrl,
    site_url: siteUrl
  };
  if (!supabaseClient) {
    showToast("資料庫尚未連線");
    return;
  }
  const isEditing = Boolean(editingBookingId);
  saveBookingButton.disabled = true;
  const response = isEditing
    ? await supabaseClient.from("booking_items").update(payload).eq("id", editingBookingId).select().single()
    : await supabaseClient.from("booking_items").insert({ ...payload, accent: false, sort_order: bookingItemsState.length * 10 + 100 }).select().single();
  saveBookingButton.disabled = false;
  if (response.error) {
    showToast("儲存失敗，請稍後再試");
    return;
  }
  const savedItem = normalizeBookingRow(response.data);
  bookingItemsState = isEditing
    ? bookingItemsState.map((item) => item.id === savedItem.id ? savedItem : item)
    : [...bookingItemsState, savedItem];
  renderBookings();
  closeBookingDialog();
  showToast(isEditing ? "預定已更新" : "預定已新增");
});

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

function normalizeChecklistRow(row) {
  return {
    id: row.id,
    groupName: row.group_name,
    label: row.label,
    isCompleted: Boolean(row.is_completed),
    sortOrder: row.sort_order || 100,
    createdAt: row.created_at || ""
  };
}

function checklistGroupsForRender() {
  const groups = new Map();
  [...checklistItemsState]
    .sort((a, b) => a.sortOrder - b.sortOrder || a.createdAt.localeCompare(b.createdAt))
    .forEach((item) => {
      if (!groups.has(item.groupName)) groups.set(item.groupName, []);
      groups.get(item.groupName).push(item);
    });
  return [...groups.entries()];
}

function renderChecklist() {
  const checklist = document.querySelector("#checklist");
  const groups = checklistGroupsForRender();
  checklistGroupNames = groups.map(([group]) => group);
  checklist.innerHTML = groups.map(([group, items], groupIndex) => {
    const rows = items.map((item) => `<div class="check-item-shell" data-check-shell="${escapeHtml(item.id)}">
      <button class="check-delete" type="button" data-check-delete="${escapeHtml(item.id)}" aria-label="刪除${escapeHtml(item.label)}">刪除</button>
      <label class="check-item"><input type="checkbox" data-check="${escapeHtml(item.id)}" ${item.isCompleted ? "checked" : ""} /><span class="check-box">${icons.check}</span><span class="check-label">${escapeHtml(item.label)}</span></label>
    </div>`).join("");
    return `<div class="check-group">${escapeHtml(group)}</div>${rows}
      <div class="check-add-row" data-check-add-row="${groupIndex}">
        <button class="check-add-button" type="button" data-check-add="${groupIndex}" aria-expanded="false"><span class="check-add-icon" aria-hidden="true">＋</span><span>新增項目</span></button>
        <form class="check-add-form" data-check-form="${groupIndex}">
          <label class="sr-only" for="check-add-input-${groupIndex}">新增${escapeHtml(group)}項目</label>
          <input id="check-add-input-${groupIndex}" type="text" maxlength="80" placeholder="輸入準備項目" autocomplete="off" />
          <button class="check-add-submit" type="submit">加入</button>
          <button class="check-add-cancel" type="button" data-check-cancel="${groupIndex}">取消</button>
        </form>
      </div>`;
  }).join("");
}

async function loadChecklist() {
  if (!supabaseClient) {
    checklistItemsState = [];
    renderChecklist();
    showToast("資料庫尚未連線");
    return;
  }
  const { data, error } = await supabaseClient
    .from("checklist_items")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) {
    checklistItemsState = [];
    renderChecklist();
    showToast("準備清單載入失敗");
    return;
  }
  checklistItemsState = (data || []).map(normalizeChecklistRow);
  renderChecklist();
}

function subscribeToChecklist() {
  if (!supabaseClient) return;
  supabaseClient
    .channel("checklist-items-sync")
    .on("postgres_changes", { event: "*", schema: "public", table: "checklist_items" }, loadChecklist)
    .subscribe();
}

function closeSwipedChecklistItems(except = null) {
  document.querySelectorAll(".check-item-shell.is-swiped").forEach((shell) => {
    if (shell !== except) shell.classList.remove("is-swiped");
  });
}

function toggleChecklistAddForm(groupIndex, open = true) {
  const row = document.querySelector(`.check-add-row[data-check-add-row="${groupIndex}"]`);
  if (!row) return;
  const button = row.querySelector("[data-check-add]");
  const form = row.querySelector("[data-check-form]");
  form.classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", String(open));
  if (open) form.querySelector("input")?.focus();
}

async function addChecklistItem(groupIndex, input) {
  const label = input.value.trim();
  if (!label) {
    showToast("請輸入準備項目");
    input.focus();
    return;
  }
  const group = checklistGroupNames[groupIndex];
  if (!group) return;
  if (checklistItemsState.some((item) => item.groupName === group && item.label.toLowerCase() === label.toLowerCase())) {
    showToast("這個項目已經存在");
    input.focus();
    return;
  }
  if (!supabaseClient) {
    showToast("資料庫尚未連線");
    return;
  }
  const sortOrder = Math.max(0, ...checklistItemsState.filter((item) => item.groupName === group).map((item) => item.sortOrder)) + 10;
  const { data, error } = await supabaseClient
    .from("checklist_items")
    .insert({ group_name: group, label, sort_order: sortOrder })
    .select()
    .single();
  if (error) {
    showToast("新增失敗，請稍後再試");
    return;
  }
  checklistItemsState = [...checklistItemsState, normalizeChecklistRow(data)];
  renderChecklist();
  showToast("已新增準備項目");
}

async function deleteChecklistItem(button) {
  if (!supabaseClient) {
    showToast("資料庫尚未連線");
    return;
  }
  const id = button.dataset.checkDelete;
  const { error } = await supabaseClient.from("checklist_items").delete().eq("id", id);
  if (error) {
    showToast("刪除失敗，請稍後再試");
    return;
  }
  checklistItemsState = checklistItemsState.filter((item) => item.id !== id);
  renderChecklist();
  showToast("已刪除準備項目");
}

const checklist = document.querySelector("#checklist");
let checklistSwipe = null;
let suppressChecklistClick = false;
let suppressChecklistChange = false;
checklist.addEventListener("change", async (event) => {
  const input = event.target.closest("input[data-check]");
  if (!input) return;
  if (suppressChecklistChange) {
    input.checked = !input.checked;
    return;
  }
  const id = input.dataset.check;
  if (!supabaseClient) {
    input.checked = !input.checked;
    showToast("資料庫尚未連線");
    return;
  }
  const nextValue = input.checked;
  const { data, error } = await supabaseClient.from("checklist_items").update({ is_completed: nextValue }).eq("id", id).select().single();
  if (error) {
    input.checked = !nextValue;
    showToast("儲存失敗，請稍後再試");
    return;
  }
  checklistItemsState = checklistItemsState.map((item) => item.id === id ? normalizeChecklistRow(data) : item);
  showToast(input.checked ? "已加入完成清單" : "已從清單移除");
});
checklist.addEventListener("click", (event) => {
  if (suppressChecklistClick) {
    event.preventDefault();
    suppressChecklistClick = false;
    return;
  }
  const addButton = event.target.closest("[data-check-add]");
  if (addButton) {
    closeSwipedChecklistItems();
    toggleChecklistAddForm(Number(addButton.dataset.checkAdd), addButton.getAttribute("aria-expanded") !== "true");
    return;
  }
  const cancelButton = event.target.closest("[data-check-cancel]");
  if (cancelButton) {
    toggleChecklistAddForm(Number(cancelButton.dataset.checkCancel), false);
    return;
  }
  const deleteButton = event.target.closest("[data-check-delete]");
  if (deleteButton) {
    deleteChecklistItem(deleteButton);
    return;
  }
  if (!event.target.closest(".check-item")) closeSwipedChecklistItems();
});
checklist.addEventListener("submit", (event) => {
  const form = event.target.closest("[data-check-form]");
  if (!form) return;
  event.preventDefault();
  addChecklistItem(Number(form.dataset.checkForm), form.querySelector("input"));
});
checklist.addEventListener("pointerdown", (event) => {
  const item = event.target.closest(".check-item");
  if (!item || (event.pointerType === "mouse" && event.button !== 0)) return;
  checklistSwipe = { item, shell: item.closest(".check-item-shell"), pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, moved: false };
  item.setPointerCapture?.(event.pointerId);
});
checklist.addEventListener("pointermove", (event) => {
  if (!checklistSwipe || event.pointerId !== checklistSwipe.pointerId) return;
  const deltaX = event.clientX - checklistSwipe.startX;
  const deltaY = event.clientY - checklistSwipe.startY;
  if (Math.abs(deltaX) < 12 || Math.abs(deltaX) < Math.abs(deltaY)) return;
  event.preventDefault();
  checklistSwipe.moved = true;
  suppressChecklistChange = true;
  if (deltaX < 0) {
    closeSwipedChecklistItems(checklistSwipe.shell);
    checklistSwipe.shell.classList.add("is-swiping", "is-swiped");
  } else {
    checklistSwipe.shell.classList.remove("is-swiped");
  }
});
checklist.addEventListener("pointerup", (event) => {
  if (!checklistSwipe || event.pointerId !== checklistSwipe.pointerId) return;
  if (checklistSwipe.moved) {
    suppressChecklistClick = true;
    window.setTimeout(() => {
      suppressChecklistClick = false;
      suppressChecklistChange = false;
    }, 450);
  }
  checklistSwipe.shell.classList.remove("is-swiping");
  checklistSwipe = null;
});
checklist.addEventListener("pointercancel", () => {
  checklistSwipe?.shell.classList.remove("is-swiping");
  checklistSwipe = null;
});

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

function normalizeItineraryOverride(row) {
  return {
    time: row.time_label || "TBD",
    type: row.type || "OPEN",
    title: row.title || "未命名行程",
    description: row.description || "",
    location: row.location || "",
    detail: row.detail || "",
    mapUrl: safeMapUrl(row.map_url || "")
  };
}

async function loadItineraryOverrides() {
  if (!supabaseClient) return;
  const { data, error } = await supabaseClient.from("itinerary_overrides").select("*");
  if (!error) {
    itineraryOverrides = Object.fromEntries((data || []).map((row) => [row.item_key, normalizeItineraryOverride(row)]));
    renderDay();
  }
}

function subscribeToItineraryData() {
  if (!supabaseClient) return;
  supabaseClient
    .channel("itinerary-data-sync")
    .on("postgres_changes", { event: "*", schema: "public", table: "itinerary_items" }, loadRemoteItems)
    .on("postgres_changes", { event: "*", schema: "public", table: "itinerary_overrides" }, loadItineraryOverrides)
    .subscribe();
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

  if (!supabaseClient) {
    showToast("資料庫尚未連線");
    return;
  }

  saveItineraryButton.disabled = true;
  if (editingItem?.source === "fixed") {
    const { data, error } = await supabaseClient
      .from("itinerary_overrides")
      .upsert({
        item_key: editingItem.editKey,
        ...payload
      }, { onConflict: "item_key" })
      .select()
      .single();
    saveItineraryButton.disabled = false;
    if (error) {
      showToast("儲存失敗，請稍後再試");
      return;
    }
    itineraryOverrides[editingItem.editKey] = normalizeItineraryOverride(data);
    renderDay();
    closeItineraryDialog();
    showToast("行程已更新");
    return;
  }

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
  siteHeader.classList.toggle("is-hidden", view !== "itinerary");
  if (view !== "itinerary") window.scrollTo({ top: document.querySelector(`[data-panel="${view}"]`).offsetTop - 26, behavior: "smooth" });
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
renderBookings();
loadBookings();
subscribeToBookings();
renderDayPicker();
renderDay();
renderChecklist();
loadRemoteItems();
loadChecklist();
loadItineraryOverrides();
subscribeToChecklist();
subscribeToItineraryData();
