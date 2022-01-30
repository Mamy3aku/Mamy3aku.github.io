---
title: "foobar2000のカスタマイズ"
date: 2020-06-01T22:15:42+09:00
draft: False
---

<div style="margin: auto">
{{< thumb2 "foobar2000.png" >}}
</div>

### foobar2000 とは？ 
[foobar2000 の公式ホームページ](https://www.foobar2000.org/)
(Download タブから落とせます)

軽量でカスタマイズ範囲が広いWindows向けの音楽プレイヤーです。

とにかく軽く、起動も一瞬で動作中もサクサク動きます。余計なバックグラウンドサービスも走りません。クリーンです。

また、カスタマイズできる範囲が広く自分好みのインターフェースにしたり、アップサンプリング再生するプラグインでCD音源やMP3音源をハイレゾ化したりもできます。
柔軟にカスタマイズできる分、設定にはある程度知識が必要となり初心者向けのソフトではないです。

#### 良い点
- シンプルで軽量
- 自分好みにカスタマイズしやすい
- WASAPIやASIOでビットパーフェクトな出力ができる

#### 悪い点
- 使いやすくするにはある程度カスタマイズが必要 
- iPhoneやAndroidなど外部機器との連携機能が弱い

2点目の外部連携が弱いのは、必要ない機能が入っていないという点で、私にとってはむしろ嬉しいことです。

### カスタマイズ

UIはトップに張った画像のようにしています。

#### 入れているプラグイン
- [Column UI](https://yuo.be/columns-ui)
ユーザーインターフェイスのカスタマイズ用プラグイン
- [EsPlaylist](http://foo2k.chottu.net/)
アルバムジャケット一覧を表示するためのプラグイン
- [Playback Statistics](http://www.foobar2000.org/components/view/foo_playcount)
曲ごとの再生数といった統計情報を記録
- [WASAPI output support](http://www.foobar2000.org/components/view/foo_out_wasapi)
WASAPI 経由でビットパーフェクトな出力ができるようになる。ちなみに DAC は FOSTEX の HP-A4 を使っています。

#### レイアウト
レイアウトはこんな感じです。
設定ファイルもおいておきます。Preferences => Columns UI の 「Import Configurations...」 からインポートして使ってください。

[設定ファイル](./shumatsu.fcl)
<div style="width: 80%; margin: auto;">
{{< thumb2 "layout.png" >}}
</div>

#### フェーディングをオフにする
デフォルトだと曲の最初と最後がフェーディングするようになっていますが、これは必要ないのでオフにします。
Playback => Output のスライドバーを左に寄せます(数値を直接編集することはできないみたい)。
<div style="width: 80%; margin: auto;">
{{< thumb2 "fading.png" >}}
</div>

#### 出力先をすぐに切り替えられるようにする
出力先の WASAPI とプライマリーサウンドドライバー(PS)を簡単に切り替えられるようにします。
WASAPI で出力すると、排他モードなのでほかのソフトの音は一切聞こえなくなります。
集中して聞きたいときは WASAPI、ゲームとか作業しながら聞きたいときは PS にすぐ切り替えられると便利なのでそうします。
コントロールボタンの「P」と「W」で切り替えられるようにしています。
手順も載せておきます。

<div style="width: 80%; margin: auto;">
{{< thumb2 "wasapi_button.png" >}}
</div>

1. Layout 中の Button の Configuration を開く
<div style="width: 80%; margin: auto;">
{{< thumb2 "button_config.png" >}}
</div>

2. Add を開く
<div style="width: 80%; margin: auto;">
{{< thumb2 "button_config_add.png" >}}
</div>

3. 出力先を選択して OK をクリック
<div style="width: 80%; margin: auto;">
{{< thumb2 "button_config_devices.png" >}}
</div>

これでボタンが追加されました。WASAPI と PS に対して同じ操作をすればいいです。