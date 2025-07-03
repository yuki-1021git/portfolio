# GitHub Pages デプロイ手順書

## 📋 事前チェックリスト
- [x] サイトサイズ: 30.7MB (制限1GBの3%のみ使用)
- [x] 全ファイル準備完了
- [x] レスポンシブ対応済み
- [x] 各ページリンク確認済み

## 🚀 GitHub Pages デプロイ手順

### ステップ1: GitHubアカウント準備
1. [GitHub.com](https://github.com) でアカウント作成・ログイン
2. メール認証を完了させる

### ステップ2: リポジトリ作成
1. 右上の「+」→「New repository」をクリック
2. Repository name: `portfolio-website` または `john-design-portfolio`
3. Description: `John Design - Professional Web Portfolio`
4. 「Public」を選択（Privateでも可）
5. 「Add a README file」にチェック
6. 「Create repository」をクリック

### ステップ3: ファイルアップロード方法

#### 方法A: Web上でアップロード（簡単）
1. 作成したリポジトリページで「uploading an existing file」をクリック
2. 以下のファイルをドラッグ&ドロップ:
   ```
   index.html
   style.css
   about.html
   news.html
   service.html
   work.html
   README.md
   img/ フォルダ（中身全て）
   ```
3. Commit message: `Initial portfolio website upload`
4. 「Commit changes」をクリック

#### 方法B: GitHubデスクトップ使用（推奨）
1. [GitHub Desktop](https://desktop.github.com/) をダウンロード
2. 「Clone repository from the Internet」
3. リポジトリを選択してクローン
4. ローカルフォルダにファイルをコピー
5. 「Commit to main」→「Push origin」

### ステップ4: GitHub Pages 設定
1. リポジトリページの「Settings」タブをクリック
2. 左サイドバーから「Pages」を選択
3. Source: 「Deploy from a branch」を選択
4. Branch: 「main」を選択
5. 「Save」をクリック

### ステップ5: 公開URL確認
- 数分後に `https://あなたのユーザー名.github.io/portfolio-website` でアクセス可能
- 設定ページに緑色のチェックマークとURLが表示される

## 🌐 独自ドメイン設定（オプション）

### ドメイン購入推奨サービス
- **お名前.com**: .com 年額1,408円
- **ムームードメイン**: .jp 年額3,344円
- **Google Domains**: .dev 年額1,200円

### 推奨ドメイン例
- `john-design.com`
- `johnweb.dev`
- `portfolio-john.net`

### DNS設定手順
1. ドメイン管理画面でAレコードを追加:
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

2. CNAMEレコードを追加:
```
CNAME www あなたのユーザー名.github.io
```

3. GitHub Pages設定でCustom domainに購入したドメインを入力

## ⚡ パフォーマンス最適化

### 画像最適化（推奨）
現在の画像サイズが大きいため、以下で最適化:

1. **画像圧縮サービス**:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)

2. **推奨サイズ**:
   - ヒーロー画像: 1920x1080px, 200KB以下
   - 制作実績画像: 800x600px, 100KB以下
   - アイコン: 500x500px, 50KB以下

### 最適化後の期待効果
- 読み込み速度: 2-3秒短縮
- SEOスコア向上
- モバイル体験改善

## 📊 SEO対策

### meta タグ追加
index.htmlの `<head>` セクションに追加:

```html
<!-- SEO meta tags -->
<meta name="description" content="John Design - プロフェッショナルなWebデザイン・制作サービス。お客様の想いを形にする高品質なWebサイトを制作します。">
<meta name="keywords" content="Webデザイン,ホームページ制作,UI/UX,レスポンシブデザイン,John Design">
<meta name="author" content="John Design">

<!-- Open Graph meta tags -->
<meta property="og:title" content="John Design - Professional Web Design">
<meta property="og:description" content="お客様の想いを形にする高品質なWebサイト制作">
<meta property="og:image" content="https://あなたのドメイン/img/名称未設定 1.png">
<meta property="og:url" content="https://あなたのドメイン">
<meta property="og:type" content="website">

<!-- Twitter Card meta tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="John Design - Professional Web Design">
<meta name="twitter:description" content="お客様の想いを形にする高品質なWebサイト制作">
<meta name="twitter:image" content="https://あなたのドメイン/img/名称未設定 1.png">
```

### Google Analytics 設定
1. [Google Analytics](https://analytics.google.com/) でアカウント作成
2. トラッキングコードを全ページの `<head>` に追加

### Google Search Console 登録
1. [Google Search Console](https://search.google.com/search-console/) でサイト登録
2. サイトマップ送信

## 🔧 トラブルシューティング

### よくある問題と解決法

1. **サイトが表示されない**
   - 設定から5-10分待つ
   - ブラウザキャッシュをクリア
   - HTTPSでアクセス

2. **画像が表示されない**
   - パスの大文字小文字を確認
   - 日本語ファイル名を英語に変更

3. **CSSが適用されない**
   - ファイルパスを確認
   - ブラウザの開発者ツールでエラーチェック

4. **404エラー**
   - ファイル名の確認
   - index.htmlがルートにあることを確認

## 📞 サポート・参考資料

- [GitHub Pages ドキュメント](https://docs.github.com/pages)
- [GitHub コミュニティフォーラム](https://github.community/)
- [Web開発者向けMDN](https://developer.mozilla.org/)

## 🎯 公開後のTODO

### 即座に実行
- [ ] 全ページの動作確認
- [ ] モバイルでの表示確認
- [ ] フォームテスト
- [ ] 読み込み速度テスト

### 1週間以内
- [ ] Google Analytics 設定
- [ ] Google Search Console 登録
- [ ] 独自ドメイン設定（予算があれば）

### 1ヶ月以内
- [ ] SEO最適化
- [ ] 画像最適化
- [ ] コンテンツ更新
- [ ] お客様からのフィードバック反映
