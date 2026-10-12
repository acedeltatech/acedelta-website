# CHANGELOG — 2026-10-09 (v15, 待核准部署)

依「網站優化策略文件」執行，**未自動發布** — 審核後上傳。

## Changed
1. **五頁 title／meta description**：加入優先技術關鍵字（Ga-In-Sn Alloy、Gallium-Indium-Tin、Liquid Metal TIM、Thermal Grease Pump-Out、Thermal Paste Dry-Out、AI Server Liquid Cooling、automotive electronics＋繁中對應），英文主導。
2. **Home**：材料索引「液態金屬」藥丸改為「液態金屬（鎵銦錫合金 GaInSn）／Liquid Metal — Ga-In-Sn Alloy TIM」；JSON-LD knowsAbout 加入 Ga-In-Sn／AI Server Liquid Cooling。
3. **Solutions**：新增「鎵銦錫合金（GaInSn）」說明區塊（雙語，含導電性／相容性／潤濕／圍堵評估措辭）；FAQPage 新增 Ga-In-Sn 问答。
4. **Engineering & Supply**：
   - EV 卡焦點句加入 Automotive electronics 車用電子（雙語）。
   - **新增 GLOBAL SUPPLY & ENGINEERING SAMPLES 英文區**：12 個目標市場（US/MX/VN/TH/MY/JP/TW/CZ/PL/IE/DE/HU）＋「樣品以國際快遞寄送美墨，視供應與運輸／進口規定而定」＋日泰馬越採購詢問支援（不暗示未證實的辦公室／倉庫）。
   - 新增「Request Sample / RFQ →」按鈕 → `contact.html?rfq=1`。
5. **Contact**：支援 `?rfq=1` 深連結（自動捲至聯絡區）；meta 更新。
6. **llms.txt**：全面改寫 — 新定位／Core Capabilities／應用領域／技術知識（Ga-In-Sn、Pump-Out、Dry-Out、Reliability）／12 市場樣品政策／語言策略／Accuracy 聲明／目標客戶輪廓（明確標註非現有客戶）。
7. **style.css**：零損耗串接重建＋稽核保護層（structural helpers 入 OVERRIDE — 根治規則遺失）。

## Not done（依指示）
- 未建立日文／越南文等新語言頁（Japanese 保留為選配）。
- 未加入任何目標客戶 Logo、授權關係、性能數據、認證或客戶案例。
- 未自動發布。

## 待公司確認
- 對外名稱「A.C.E DELTA TECH」vs「A.C.E DELTA」（現站與名片為後者；llms.txt 已採 TECH 別稱並存）。
- 目標客戶輪廓（Bosch/Autoliv/Apple/Tesla/Boyd…）僅出現在 llms.txt 供 AI 理解定位，公開頁面未列 — 是否維持？
- 日文簡介的範圍與時程。

## v16 追加（2026-10-12）
- **日文版首頁第一稿**（`ja/index.html`，獨立頁供審核）：完整日文翻譯（Noto Sans JP、lang="ja"、canonical=/ja/、hreflang=ja、日文 SEO meta）— Hero／價值列／三產品手風琴／系統總覽／原創結構圖（圖內標籤同步日文）／八步流程／實體條／頁尾。
- 語言切換（日文版頁面）：EN｜繁中｜日本語（連結式）。
- **未接其他頁導覽**（等審核通過後再全站串連）；術語請日語母語同事複核（品質控管規則）。
- 依「維持」決策：公開名稱維持 A.C.E DELTA；目標客戶輪廓僅存於 llms.txt。
- **v17（2026-10-12）**：依指示移除「台灣會員公司」資訊（中／英／日）：Home 實體條帝昇區塊（logo＋Taiwan Member Company｜台灣會員公司）與日文版（台湾メンバーカンパニー）全數移除、實體條改兩欄；llms.txt 同步移除該描述。About 頁企業關係區的帝昇實體卡（Taiwan investment company 描述）維持不變 — 如需一併移除請告知。
- **v18（2026-10-12）日文審稿修訂**：八項強制術語全數套用（先端熱マネジメント材料／技術支援・材料調達／会社案内資料／コンピューティングの未来／材料評価・供給／プロピレングリコール系熱媒体／機器冷却回路／調達先・供給元）；一致用語統一（液体金属TIM／熱界面材料／熱伝導グリース／熱伝導ゲル／ギャップフィラー／アンダーフィル材／冷却液）；新標題「次世代コンピューティングを支える先端材料」＋副標「液冷技術 × 熱界面材料 × 半導体パッケージング」；SEO title／meta／og 全面日文修訂；WebPage 結構化資料與 Breadcrumb 日文化（ホーム）；/ja/ 連結驗證；未部署。
- **v18（2026-10-12）日文審稿修訂**：八項強制術語套用＋一致用語統一＋新標題（次世代コンピューティングを支える先端材料／液冷技術 × 熱界面材料 × 半導体パッケージング）＋SEO/WebPage/Breadcrumb 日文化＋/ja/ 連結驗證＋日繁對照表（ja-tc-comparison-table.md）。未部署。
- **v19（2026-10-12）日文最終品質改善**：P0 — 45 處無效 font-size 宣告修復（font-size:var() 化，全站五頁樣式同時根治）；舊雙語 JS 完全移除（日文頁改用獨立純日 JS：手風琴／響應式導覽／CTA）；lang="ja" 維持；語言切換改為真實 URL 連結（/index.html、/?lang=zh）+hreflang 標註；導覽全部根路徑化（無未發布頁）。P1 — 術語：材料選定・技術支援／液冷サーバーシステム 等全面套用；移除 NON-CHINA ORIGIN／EXCLUSIVE DISTRIBUTion 商業聲明（日文頁）。P2 — 下載按鈕改為誠實詢價導向（→ #rfq）；新增日文 RFQ 表單（應用／材料／數量／納入先國／樣品要否）；TDS 註明「確認済みのもののみ提供」。P3 — canonical/hreflang 互相對向驗證（ja↔en↔zh）；WebPage/Organization JSON-LD 日文化；OG image 路徑待 og.jpg 部署；sitemap 待部署後加 /ja/。未部署。
- **v20（2026-10-12）日文 RC 品質改善**：
  P0 — WebPage JSON-LD 修正（@id/url=/ja/、inLanguage:ja、日文標題/說明）；BreadcrumbList 完整移除（首頁無效標記）；導覽聯絡＝お問い合わせ；#contact 死錨改 #rfq；Logo 連結改 /ja/；EN 頁面連結加（英語）標示；CSS 變數語法保持 var() 修復版。
  P1 — 術語：材料選定・技術相談／サンプル・見積依頼／液冷サーバーシステム 套用；NON-CHINA/EXCLUSIVE 聲明維持移除。
  P2 — RFQ 表單：改 fetch 端點架構（FORM_ENDPOINT 變數，Formspree 註冊後填入即上線；未設定時誠實 fallback 至 email 並明示「準備中」）+ honeypot＋3 秒時間陷阱反垃圾 + aria-live 成功/錯誤回饋（伺服器確認前不顯示成功）+ 隱私聲明 + 新增欄位（電気絶縁要件／接触基板材質／動作温度範囲／信頼性・認定要件）。無秘密金鑰於前端。
  效能 — repo 版圖片抽出為 WebP（hero-ai-dc／system-overview／3 產品）；below-fold lazy loading；hero fetchpriority=high。
  P3 — EN 五頁補 hreflang=ja（互相對向完整）；sitemap 加 /ja/（部署後生效）；OG 圖待 og.jpg。
  未部署。
- **v21（2026-10-12）RC 最終**：P0 全項 — JSON-LD WebPage（@id/url=/ja/、inLanguage:ja、日文）＋BreadcrumbList 完整移除；#contact 死錨→#rfq；Logo→/ja/；EN 頁面連結加（英語）標示；JP 為主標語義（H1=日文、英文為 tipline）；RFQ 欄位四項新增＋honeypot＋時間陷阱＋aria-live 狀態（伺服器確認前不顯示成功）＋隱私聲明＋FORM_ENDPOINT 設計（Formspree 註冊後填入即為 working endpoint；未設時誠實 fallback）；效能 — repo 圖片 WebP 化＋lazy loading（hero fetchpriority=high）；P3 — EN 五頁 hreflang=ja 互相對向＋sitemap 加 /ja/＋Broken-link report／Mobile QA checklist／Integration plan 三份文件入包。未部署。
- **v24（2026-10-12）**：修復「index 無法連到日文頁」— 根因：/ja/ 已部署但 EN 五頁的語言切換器漏了「日本語」按鈕（v19 僅在日文頁做了切換器）。五頁 lang-sw 全部補上 hreflang="ja" 的日本語連結（→ /ja/）。未部署 — 上傳 v24 後生效。
