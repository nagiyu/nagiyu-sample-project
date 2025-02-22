# 使い方

## プロジェクト作成

- `Import a repository` で本リポジトリ (ベースプロジェクト) をインポートし、新しいプロジェクトを作成します。

## フローのイメージ

### ベースプロジェクトの取り込み

1. リモートブランチ (ベースプロジェクト) の追加

1. ベースプロジェクトのフェッチ

1. ベースプロジェクトからマージ (タグ)

1. リモートブランチ (ベースプロジェクト) の削除

### ベースプロジェクトへのプッシュ

1. リモートブランチ (ベースプロジェクト) の追加

1. ベースプロジェクトのフェッチ

1. ベースプロジェクトへプッシュ

    - この時、作業ブランチへプッシュすること！

1. リモートブランチ (ベースプロジェクト) の削除

1. ベースプロジェクトの修正

    - 各機能の変更が混じらないよう注意！

## リモートブランチの操作

### 追加

```bash
git remote add base https://github.com/nagiyu/nagiyu-base.git
```

### 削除

```bash
git remote remove base
```

### フェッチ

```bash
git fetch base
```

### マージ (タグ)

```bash
git merge base/v1.0.0
```

### マージ (ブランチ)

```bash
git merge base/feature1
```

### プッシュ

```bash
git push base feature2:feature1
```

- `feature1` はベースプロジェクトのブランチ

- `feature2` は各プロジェクトのブランチ
