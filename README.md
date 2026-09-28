# Mamy3aku.github.io

## ローカルでの確認

Hugo 0.166.0 (extended) を使用します。

```sh
hugo server -D
```

## ロシア語の活用表

`data/pyc/*.json` に見出し、説明文、表を保存しています。各ファイルの `entries` 配列に項目を追加し、`heading`、必要に応じて `detail` と `notes`、`tables` の `caption` と `rows` を編集します。セルには文字列だけを記入してください。表示用の HTML は `layouts/shortcodes/pyc_table.html`、CSS は `static/css/pyc-tables.css` にあります。
