# ポートフォリオサイト Git管理スクリプト

## 日常的な更新手順

### ファイル変更後の更新
```bash
# 変更内容を確認
git status

# 変更をステージング
git add .

# コミット（メッセージを適切に変更）
git commit -m "Update portfolio content"

# GitHubにプッシュ
git push origin main
```

### 便利なGitコマンド

#### 現在の状況確認
```bash
git status          # ファイルの変更状況
git log --oneline   # コミット履歴
git diff            # 変更差分を表示
```

#### ブランチ管理
```bash
git branch          # ブランチ一覧
git branch feature  # 新ブランチ作成
git checkout feature # ブランチ切り替え
git merge feature    # ブランチをマージ
```

#### 取り消し操作
```bash
git checkout -- ファイル名    # ファイルの変更を取り消し
git reset HEAD ファイル名     # ステージングを取り消し
git revert コミットID         # コミットを取り消し
```

## 更新の自動化スクリプト

### Windows PowerShell用
```powershell
# deploy.ps1
$commitMessage = Read-Host "コミットメッセージを入力してください"
git add .
git commit -m $commitMessage
git push origin main
Write-Host "サイトが更新されました！" -ForegroundColor Green
Write-Host "URL: https://yuki-1021git.github.io/portfolio-website" -ForegroundColor Blue
```

### 使用方法
```bash
# スクリプトを実行可能にする
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# スクリプト実行
.\deploy.ps1
```

## ベストプラクティス

### コミットメッセージの例
- `feat: 新しいプロジェクトページを追加`
- `fix: レスポンシブデザインの不具合修正`
- `style: CSSのコードフォーマット調整`
- `update: about.htmlのプロフィール情報更新`
- `docs: README.mdの説明を追加`

### 定期的なメンテナンス
```bash
# リモートの最新情報を取得
git fetch origin

# ローカルを最新に更新
git pull origin main
```

## トラブルシューティング

### よくある問題

1. **認証エラー**
   - Personal Access Token の設定
   - SSH鍵の設定

2. **プッシュできない**
```bash
git pull origin main  # 最新を取得してから
git push origin main  # 再度プッシュ
```

3. **コンフリクト解決**
```bash
git status           # コンフリクトファイル確認
# ファイルを手動編集してコンフリクト解決
git add .
git commit -m "Resolve merge conflicts"
```

## GitHub Pages URL
https://yuki-1021git.github.io/portfolio-website

## リポジトリ管理Tips

### .gitignore ファイル
```
# 無視するファイル・フォルダ
.DS_Store
Thumbs.db
*.log
node_modules/
.env
```

### GitHub Issues活用
- バグ報告
- 機能追加の管理
- TODOリスト

### GitHub Actions（自動化）
将来的にCSSミニファイ化や画像圧縮の自動化も可能
