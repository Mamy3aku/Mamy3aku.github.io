---
title: "Mozilla Firefox のカスタマイズメモ"
date: 2020-08-27T15:15:42+09:00
draft: False
---

### アドオン
- [Adblock Plus](https://addons.mozilla.org/ja/firefox/addon/adblock-plus/)
- [Share on Twitter](https://addons.mozilla.org/ja/firefox/addon/tweetright/)
- [Vim Vixen](https://addons.mozilla.org/ja/firefox/addon/vim-vixen/)
- [Tree Style Tab](https://addons.mozilla.org/ja/firefox/addon/tree-style-tab/)
- [TST Mouse Wheel and Double Click](https://addons.mozilla.org/ja/firefox/addon/tree-style-tab-mouse-wheel/)


### ツリー型タブのテーマ設定
Plain にして[このスタイル](https://github.com/piroor/treestyletab/wiki/Vertigo-theme-%28patch-for-the-theme-%22Plain%22%29)を適用する


### UI 密度をコンパクトにする
バーガーメニュー => カスタマイズ => 下のほうの「UI密度」から「コンパクト」に変更


### サイドバーのヘッダーを非表示にする
toolkit.legacyUserProfileCustomizations.stylesheets = true

about:support からプロファイルフォルダを開く。 
```
#sidebar-header { display: none; }
```
を chrome/userChrome.css に追記する


### フォントのレンダリングをきれいにする
gfx.font_rendering_cleartype_params.rendering_mode = 5

### そのほか
ブックマークバーを表示

最終的にこんな感じになる
<div style="margin: auto">
{{< thumb2 "firefox.png" >}}
</div>
