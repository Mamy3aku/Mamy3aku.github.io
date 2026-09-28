# Mamy3aku.github.io

## ローカルでの確認

Hugo 0.166.0 (extended) を使用します。

```sh
hugo server -D
```

## ロシア語の活用表

`data/pyc/*.json` に見出し、説明文、表を保存しています。各ファイルの `entries` 配列に項目を追加し、`heading`、必要に応じて `detail` と `notes`、`tables` の `caption` と `rows` を編集します。セルには文字列だけを記入してください。表示用の HTML は `layouts/shortcodes/pyc_table.html`、CSS は `static/css/pyc-tables.css` にあります。

## 写真のメタデータ

Git フックは、コミット対象の `.jpg` / `.jpeg` の EXIF から、向きと色空間に関するタグ以外を ExifTool で削除します。ICC プロファイルなど EXIF 以外のメタデータは保持します。

新しい作業環境では [ExifTool](https://exiftool.org/install.html) と Python 3 を用意し、リポジトリで次を一度実行してください。Windows では `winget install --id OliverBetz.ExifTool --exact` でも導入できます。

```sh
git config --local core.hooksPath .githooks
```
