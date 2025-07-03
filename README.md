# ポートフォリオサイト デプロイガイド

## GitHub Pages での公開手順

### 1. GitHubアカウント作成・ログイン
- [GitHub](https://github.com) でアカウント作成

### 2. 新しいリポジトリ作成
- 「New repository」をクリック
- Repository name: `portfolio-website` (任意の名前)
- Public を選択
- 「Create repository」をクリック

### 3. ファイルのアップロード
以下のファイルをすべてアップロード:
```
index.html
style.css
news.html
service.html
work.html
about.html
img/ フォルダとその中身すべて
```

### 4. GitHub Pages の設定
1. リポジトリの「Settings」タブをクリック
2. 左メニューから「Pages」を選択
3. Source を「Deploy from a branch」に設定
4. Branch を「main」に設定
5. 「Save」をクリック

### 5. 公開URL確認
- 数分後に `https://ユーザー名.github.io/portfolio-website` でアクセス可能

## 独自ドメインの設定（オプション）

### 1. ドメイン購入
推奨サービス:
- お名前.com
- ムームードメイン
- Google Domains

### 2. DNS設定
ドメイン管理画面でAレコードを設定:
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

CNAMEレコード:
```
CNAME    www    ユーザー名.github.io
```

### 3. GitHub Pages でドメイン設定
1. Settings → Pages
2. Custom domain に購入したドメインを入力
3. 「Save」をクリック
4. 「Enforce HTTPS」にチェック

## その他のデプロイオプション

### Netlify (簡単デプロイ)
1. [netlify.com](https://netlify.com) でアカウント作成
2. サイトフォルダをドラッグ&ドロップ
3. 即座に公開完了

### Vercel
1. [vercel.com](https://vercel.com) でアカウント作成
2. GitHubリポジトリをインポート
3. 自動ビルド・デプロイ

## 公開前チェックリスト

- [ ] 全ページのリンクが正常に動作する
- [ ] 画像が正しく表示される
- [ ] レスポンシブデザインが機能している
- [ ] フォームが動作する（Netlifyの場合）
- [ ] favicon.ico を設定済み
- [ ] meta description を各ページに設定済み

## SEO最適化のヒント

1. **meta タグの追加**:
```html
<meta name="description" content="適切な説明文">
<meta name="keywords" content="webデザイン,ポートフォリオ">
<meta property="og:title" content="JOHN DESIGN">
<meta property="og:description" content="プロフェッショナルなWebデザインサービス">
<meta property="og:image" content="https://あなたのドメイン/img/og-image.jpg">
```

2. **Google Analytics の設定**
3. **Google Search Console への登録**
4. **サイトマップの作成・送信**

## トラブルシューティング

### よくある問題:
1. **画像が表示されない** → パスが正しいか確認
2. **CSSが適用されない** → ファイルパスを確認
3. **ページが404エラー** → ファイル名の大文字小文字を確認

### サポート:
- GitHub Pages ドキュメント: https://docs.github.com/pages
- Netlify ドキュメント: https://docs.netlify.com
