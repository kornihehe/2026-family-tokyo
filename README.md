# 2026 家庭東京旅遊

一個手機優先的互動式旅遊行程網站，記錄 2026/11/27–12/02 的成田、富士急與東京旅程。頁面只保留「行程」與「退稅」兩個 tab，並提供適合長輩使用的字體大小調整。使用純 HTML／CSS／JavaScript 製作，不需要安裝任何套件。

## 本機預覽

Windows 使用者直接雙擊 `preview.cmd` 即可；它會使用 Windows 內建元件啟動本機預覽並自動開啟瀏覽器，不需要另外安裝 Python 或 npm。預覽視窗保持開啟即可，關閉視窗就會停止服務。

macOS／Linux 或習慣使用終端機時，也可以用任何靜態伺服器預覽，例如：

```bash
python3 -m http.server 4173
```

接著開啟 <http://localhost:4173>。

## 發布到 GitHub（kornihehe）

1. 登入 GitHub 的 `kornihehe` 帳號，建立 `2026-family-tokyo` repository。
2. 將本資料夾推送到 repository 的 `main` branch。

## 發布到 Vercel

將 GitHub repository 匯入 Vercel 即可，Framework Preset 選 **Other**，Build Command 留空，Output Directory 設為 `.`。

## 修改行程

打開 `script.js` 最上方的 `days` 陣列，修改每天的日期、標題、行程與 `mapUrl` 即可。Google Maps 連結請優先使用 `https://www.google.com/maps/search/?api=1&query=...` 官方格式；這種格式可同時交給手機 App 或瀏覽器開啟。`maps.app.goo.gl` 短連結在部分 iOS WebView／PWA 情境可能顯示「不支援的連結」，因此固定行程不使用短連結。新增／編輯的行程與字體大小偏好會保存在目前瀏覽器的 `localStorage`，不需要 Supabase。

## 本機資料

目前版本不要求登入；新增／編輯行程與字體大小都只儲存在使用者自己的瀏覽器。清除網站資料會一併清除這些本機異動。

## 天氣預報

每日天氣會依行程地點從 Open-Meteo Forecast API 載入。旅程日期距離目前太遠時，頁面會顯示「待發布」；接近出發日、API 有逐日資料後，會顯示最高／最低溫、天氣狀況與降雨機率。

## Google Maps

Google Maps 連結使用官方 Maps URL。手機點擊時會優先交給已安裝的 Google Maps App；如果沒有安裝，則會在瀏覽器開啟相同地點。

新增／編輯行程的「地點」欄位支援 Google Places Autocomplete：輸入文字後可選擇 Google 建議，選取後會自動填入精確的 Google Maps 連結。

Google API Key 的安全設定：

1. 在 Vercel Project Settings → Environment Variables 新增 `GOOGLE_MAPS_API_KEY`，值直接貼入 Vercel，不要貼進 `script.js`、HTML、README 或聊天訊息。
2. 重新部署後，前端會透過同源 `/api/places-autocomplete` 呼叫 Google Places API；金鑰只存在 Vercel Serverless Function 的環境變數中。
3. 可選擇新增 `APP_ORIGIN`，填入正式網站網址，例如 `https://travel-japan-alpha.vercel.app`，讓 API 只接受指定來源。
4. GitHub Pages 沒有這個 Serverless Function，因此只會保留手動輸入；需要 Google 地點建議時請使用 Vercel 部署。

目前不需要把 API Key 放在瀏覽器端。若舊金鑰曾經提交到公開 repository 或在其他地方公開，請先在 Google Cloud 予以撤銷並建立新金鑰，再只放入 Vercel Environment Variables。Vercel 的 Preview、Development、Production 環境要使用哪一個，依實際部署需求勾選。
