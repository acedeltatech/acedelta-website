# RC QA Checklist — Japanese Homepage（v21）

## P0 技術（已驗證 ✅）
- [x] JSON-LD WebPage：@id/url=https://acedeltatech.com/ja/、inLanguage:ja、日文名稱與說明
- [x] BreadcrumbList 完整移除（首頁不需麵包屑）
- [x] 導覽聯絡標籤＝お問い合わせ
- [x] #contact 死錨 → #rfq（全頁零 #contact）
- [x] Logo 連結 → /ja/（日文首頁）
- [x] EN 頁面連結全部標示（英語）
- [x] CSS 變數語法 var() 修復保持（font-size:-- = 0）
- [x] H1 語義：日文為主、英文為視覺副線

## P1 術語（已驗證 ✅）
先端熱マネジメント材料／熱界面材料（TIM）／液体金属TIM／プロピレングリコール系熱媒体／熱伝導グリース／材料選定・技術相談／材料評価・供給／液冷サーバーシステム — 稽核 ALL PRESENT

## P2 RFQ（已實作）
- [x] FORM_ENDPOINT 架構（fetch + r.ok 確認後才顯示成功）
- [x] 未設端點時誠實 fallback（明示「準備中」＋開 mail）
- [x] honeypot（_gotcha）＋3 秒時間陷阱
- [x] 隱私聲明（僅用於回覆、送至 acedeltatech@gmail.com、不提供第三者）
- [x] aria-live 狀態區
- [x] 新欄位：電気絶縁要件／接触基板材質／動作温度範囲／信頼性・認定要件

## Form endpoint 整合計畫（部署時執行）
1. 於 formspree.io 註冊（免費 50 件/月）→ New Form → 複製 endpoint（如 https://formspree.io/f/abcdwxyz）
2. 開啟 ja/index.html → 找 `var FORM_ENDPOINT = '';` → 填入 endpoint
3. 測試送出 → 應顯示「送信しました…（受信確認済み）」；Formspree 後台可見信件
4. 替代方案：Getform / Basin / web3Forms（endpoint 為公開 ID，非秘密金鑰）

## Mobile QA（390px 實測 ✅）
- [x] 無水平溢出、文字可讀、漢堡選單正常
- [x] 手風琴可點開、CTA 觸達
- [x] 表單欄位可用（iOS/Android 標準鍵盤）

## P3 SEO（部分待部署）
- [x] canonical=/ja/＋hreflang ja/en/zh 三向互相對向（EN 五頁已加 ja）
- [x] WebPage/Organization JSON-LD 日文化
- [ ] /ja/ 索引：部署後 Search Console 提交（sitemap 已含 /ja/）
- [ ] OG image：待 og.jpg 上傳（現佔位 URL）

## Broken-link Report
/ja/ 頁內連結：/index.html、/?lang=zh、/solutions.html、/about.html、/engineering.html、/contact.html、#rfq、#materials、#top、mailto:acedeltatech@gmail.com — **全部有效**（外部頁以（英語）標示）。無 404 風險連結。
