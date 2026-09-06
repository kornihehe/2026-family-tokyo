# 2026黑皮東京楓葉

一個手機優先的互動式旅遊行程網站，記錄 2026/11/27–12/02 的成田、富士急與東京旅程。使用純 HTML／CSS／JavaScript 製作，不需要安裝任何套件。

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可；若要測試天氣預報與完整互動功能，建議用任何靜態伺服器預覽，例如：

```bash
python3 -m http.server 4173
```

接著開啟 <http://localhost:4173>。

## 發布到 GitHub Pages（kornihehe）

1. 登入 GitHub 的 `kornihehe` 帳號，建立一個新的 repository，例如 `travel-japan`。
2. 把本資料夾內的 `index.html`、`styles.css`、`script.js`、`README.md` 上傳到 repository 根目錄。
3. 到 repository 的 **Settings → Pages**，將 Source 設為 **Deploy from a branch**，選 `main`／`/(root)`。
4. 儲存後，網站網址會是 `https://kornihehe.github.io/travel-japan/`。

## 發布到 Vercel

將此資料夾匯入 Vercel 即可，Framework Preset 選 **Other**，Build Command 留空，Output Directory 設為 `.`。

## 修改行程

打開 `script.js` 最上方的 `days` 陣列，修改每天的日期、標題、行程與 `mapUrl` 即可。Google Maps 連結使用 `https://www.google.com/maps/search/?api=1&query=...` 格式；如果有精確的 `maps.app.goo.gl` 連結，可以直接替換。行程、預定與準備清單的異動都會同步到 Supabase，不使用 `localStorage`。

## 新增行程與 Supabase

頁面上的「新增行程」會寫入 Supabase 的 `public.itinerary_items`，預定、準備清單與固定行程編輯則分別使用 `booking_items`、`checklist_items`、`itinerary_overrides`。這些資料表都已開啟對匿名使用者的 CRUD RLS policy 與 Realtime；目前已在本專案 Supabase 建立完成，並已建立 5 筆預定與 9 筆準備清單初始資料。前端只使用 publishable key，不使用 service role key。

目前版本不要求登入，因此任何拿到網站連結的人都能新增行程。若之後需要限制只有旅伴可以編輯，再加上登入或旅程代碼即可，不需要改動現有的行程卡片結構。

## 天氣預報

每日天氣會依行程地點從 Open-Meteo Forecast API 載入。旅程日期距離目前太遠時，頁面會顯示「待發布」；接近出發日、API 有逐日資料後，會顯示最高／最低溫、天氣狀況與降雨機率。

## Google Maps

Google Maps 連結使用官方 Maps URL。手機點擊時會優先交給已安裝的 Google Maps App；如果沒有安裝，則會在瀏覽器開啟相同地點。
