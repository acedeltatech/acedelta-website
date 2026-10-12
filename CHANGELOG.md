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
- **v25（2026-10-13）日文版 About Us 追加**（ja/about.html、lang=ja、canonical=/ja/about、hreflang 互相對向）：專業日語譯文（先端熱マネジメント材料基準）— ビジョン／ミッション／価値観（A・C・E 三欄）／企業関係（ハイサン・プレイス本社＋帝昇投資）＋日文 CTA。EN about.html 的「日本語」按鈕同步改指 /ja/about。未部署 — 上傳後生效。
- **v25（2026-10-13）日文版 About Us 追加**（ja/about.html）：專業日語譯文（先端熱マネジメント材料基準）— ビジョン／ミッション／価値観（A・C・E）／企業関係（ハイサン・プレイス本社＋帝昇投資）＋日文 CTA。EN about.html「日本語」按鈕已改指 /ja/about。未部署。
- **v26（2026-10-13）日文品牌文案精修**（依 20 年品牌顧問標準之指定文案）：HERO 副標「先端材料。世界をつなぐ力。責任ある進化。」＋新增技術副標「熱を制し、技術の未来を支える。」；Vision 改「先端熱マネジメント技術と世界をつなぐ架け橋…」；Mission 廢止「イノベーションを冷却する」改「熱課題を解決する」；三項價值觀去片假名直譯（果敢な挑戦と俊敏な行動／法令遵守への責任と継続的改善／人と組織の可能性を引き出し…）；04 標題改「企業概要・事業ネットワーク」（嚴格區分法律關係）。EN／繁中未動。ja-copy-before-after.md 入包。未部署。
- **v27（2026-10-13）日文版 Contact 追加**（ja/contact.html）：お問い合わせとグローバルネットワーク — 導覽／頁首／三區塊標題／六張據點卡（全地址日文表記）／相簿圖說／聯絡帶（サンプル・見積依頼）全部日文化。EN contact.html「日本語」按鈕已改指 /ja/contact。未部署。
- **v28（2026-10-13）日本語 Contact 品牌副標追加**：主標改「お問い合わせ・グローバルネットワーク」；新增品牌副標「世界をつなぎ、現場を支える。」（主標下方・綠色亮片・視覺醒目不取代主標）；頁首說明改「先端材料、熱マネジメントソリューション、グローバル調達に関するご相談を承ります。」；01 區塊標題改「グローバル技術サービス・物流ネットワーク」＋內文改為四地區技術服務・物流網絡描述；倉庫卡加（リース）標註（非自有不動產）；CTA 按鈕改「サンプル・お見積もりのご依頼 →」。EN／繁中未動。未部署。
- **v28.1（2026-10-13）禁則処理修正**：hero-lead 單字孤行（す。）— text-wrap:balance + line-break:strict 修復。
- **v28.1（2026-10-13）禁則処理修正**：hero-lead 單字孤行（す。）— text-wrap:balance + line-break:strict 加入共用樣式表（.hero-lead 實際位於外部 CSS，前輪補在頁面層無效，本輪已修在正確位置）。
- **v29（2026-10-13）Corporate Brand Statement 統一**：三語核定標語落位 — Home Hero 品牌主張行＋全站 Footer brand-line＋Contact 語帶更新（繁中舊語「工程精準。全球串聯。負責任的進展。」→「可靠技術・全球信任・共創未來」；日文頁新增「確かな技術。世界をつなぐ信頼。共に拓く未来。」）。舊標語殘留稽核：零。頁面專屬日文副標四句全數保留。DELTAA 重複朗讀修正（aria 移除、Logo 未動）。未部署。
- **v30（2026-10-13）**：sitemap 增補 /ja/、/ja/about、/ja/contact 三個 URL（含 hreflang 三向）；新增 ja-seo-geo-guide.md（查詢管道/行動計畫/預期）。
- **v31（2026-10-13）**：日文頁「（英語）」標示移除；**五頁日文完全串連**（ja/ 五頁互相連結、EN 頁的日本語按鈕改為對應頁路由：/ja/、/ja/solutions、/ja/about、/ja/contact、/ja/engineering）；**ja/solutions.html**（液体金属TIMソリューション：ポンプアウト／ドライアウト概念図＋Ga-In-Sn 說明＋FAQ 日文問答追加）與 **ja/engineering.html**（技術支援・材料調達：四應用卡／工程流程六步／日文需求表單／グローバルサプライ）新增。未部署。
- **v31（2026-10-13）**：日文頁「（英語）」標示全數移除；**五頁日文完全串連**（ja/ index・solutions・about・contact・engineering 互相連結；EN 五頁的「日本語」按鈕改為對應頁路由）；**ja/solutions.html**（液体金属TIMソリューション：ポンプアウト／ドライアウト概念図＋Ga-In-Sn 說明＋日文 FAQ）與 **ja/engineering.html**（技術支援・材料調達：四應用卡／六步流程／日文表單／グローバルサプライ）新增。未部署。
- **v31（2026-10-13）**：日文頁「（英語）」標示移除；五頁日文完全串連（ja/ 五頁互連＋EN 頁日本語按鈕對應頁路由）；ja/solutions.html（液体金属TIMソリューション＋Ga-In-Sn 說明＋日文 FAQ）與 ja/engineering.html（技術支援・材料調達：四應用卡／六步流程／日文表單）新增。未部署。
- **v31（2026-10-13）**：日文頁「（英語）」標示移除；五頁日文完全串連（ja/ 五頁互連＋EN 五頁日本語按鈕對應頁路由）；ja/solutions.html（液体金属TIMソリューション：ポンプアウト／ドライアウト＋Ga-In-Sn 說明＋日文 FAQ）與 ja/engineering.html（技術支援・材料調達：四應用卡／六步流程／日文表單／グローバルサプライ）新增。未部署。
- **v31（2026-10-13）**：日文頁「（英語）」標示移除；五頁日文完全串連（ja/ 五頁互連＋EN 五頁日本語按鈕對應頁路由 /ja/、/ja/solutions、/ja/about、/ja/contact、/ja/engineering）；ja/solutions.html（液体金属TIMソリューション：ポンプアウト／ドライアウト＋Ga-In-Sn＋日文 FAQ）與 ja/engineering.html（技術支援・材料調達：四應用卡／六步流程／日文表單／グローバルサプライ）新增。未部署。
- **v32（2026-10-13）**：ja/solutions 新增「なぜ熱が勝負を分けるのか」行銷區 — **原創角色**迷你四驅風格漫畫插圖兩張（AI 生成、無既有 IP 角色；致敬四驅文化但設計全新）＋熱瓶頸＝勝負概念的日文文案＋合規註記（実際の車両・モーター仕様とは関係ありません）＋詢問導線。注：爆走兄弟 IP 使用與大學教授顧問背書未採用（版權與不實背書風險），以原創方案替代。未部署。
