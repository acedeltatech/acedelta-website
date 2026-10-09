# 部署指南 — GitHub Pages → acedeltatech.com

## 1. 上傳 GitHub
- 新增 repository：`acedeltatech`（Public 或 Pro 私有）
- 將本資料夾所有檔案上傳至 main 分支根目錄
- git 指令：git init → git add . → git commit -m "site" → git remote add origin <repo-url> → git push -u origin main

## 2. 啟用 GitHub Pages
- Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save
- `CNAME` 檔（已含 acedeltatech.com）會自動套用自訂網域；`.nojekyll` 已放置

## 3. DNS 設定（於您的網域註冊商）
A 記錄（@）：
  185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
CNAME（www）： <GitHub帳號>.github.io
- 生效後於 Settings → Pages 勾選 Enforce HTTPS

## 4. 收尾
- Google Search Console 提交 https://acedeltatech.com/sitemap.xml
- 確認三頁 https 通訊正常：/ 、 /about.html 、 /contact.html
