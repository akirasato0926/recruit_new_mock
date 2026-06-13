# recruit_new_mock — PUBLIC CONNECT 統合モック

求職者サイト(user) × 官公庁コンソール(toG) × 運営管理コンソール(Admin) を **1リポジトリ＝1 Pages** に集約した統合モック。すべて**ダミーデータ**（実個人情報は含まない）。

## 構成
```
/index.html                       … 統合ハブ（4導線）
/console/
  public-offices.html             … 官公庁向けLP（新規）
  toG-recruit.html                … 官公庁コンソール（旧 PublicConnect_Recruit_モック）
  admin-console.html              … 運営管理コンソール（旧 PublicConnect_Admin_モック）
  logo_pc.png
/user/                            … 求職者サイト（旧 recruit-user を移設・121HTML）
/.nojekyll
```

## 統合フロー（相対リンク）
1. 求職者サイト `/user/` 1段目ヘッダー **「官公庁の方はこちら」** → `../console/public-offices.html`
2. 官公庁向けLP ヘッダー **「ログイン」** → `./toG-recruit.html`
3. 官公庁コンソール 利用団体ID入力
   - **`000000`** → `./admin-console.html`（運営 管理コンソール）
   - 通常ID → 官公庁コンソール（採用管理）

## 由来
- `console/toG-recruit.html` / `admin-console.html` … `recruit-toG`（旧 Recruit-kanri）由来
- `user/` … `recruit-user` 由来（ヘッダーに「官公庁の方はこちら」を追加）
- 詳細な要件は recruit-toG の `docs/integration-requirements.md` 参照

## デプロイ
GitHub Pages（main / root）。`.nojekyll` 配置済。公開後ルート＝`index.html`（ハブ）。
