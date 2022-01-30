---
title: "NEC MultiSync EA271U をハードウェアキャリブレーションしてみる"
date: 2020-06-28T00:06:51+09:00
draft: false 
---

### EA271U の簡単なレビュー
キャリブレーションの前に簡単にレビューを書いておきます。\
最近はもっと安くて写りもそんなに悪くないディスプレイがたくさんありますが、普段から使うものなので奮発して NEC のディスプレイを買いました。\
この製品、ネットで検索しても価格.comでレビューが1件見つかるだけでした。物自体は悪くないし、同じ価格帯の EIZO EV2785 はそこそこレビューがあるのに…。\
ちなみに EV2785 も持っていましたが、EA271Uのほうが以下の点でいいと思いました(EV2785 は売ってしまいました)
- 黒の締まりが EA271U の方がいい
- EA271U はハードウェアキャリブレーションできるのがうれしい
- EV2785 は画面下部の輝度低下が結構ひどかった

両方ともコントラスト比が 1300:1 で、最初は同じパネルを使っているのかと思いましたが違うみたいです。
EA271U はダイレクトボンディングのような印象、EV2785 は表示部分からパネルまで空間が開いているような印象でした。

筐体のつくりは正直値段に見合ったものとは思えないです。下側のベゼル部分がしっかり固定されておらず最初は不良品かと思ってしまいました。
一応問い合わせてみましたが、どうやら仕様のようでした。この点は少しがっかりです。\
ただ、画質はとてもいいですよ！！

では本題に入って、NEC MultiSync EA271U のハードウェアキャリブレーションをしていきます。

### 用意したもの
- EA271U
- SpectraView II (キャリブレーションソフト)
- i1 Display Pro (キャリブレーター)

Spectra View の外箱が想像以上にデカイです(どうせシリアルNoしか見ないのに)。

<div style="width: 80%; margin: auto;">
{{< thumb2 "packages.jpg" >}}
</div>

### SpectraView II の環境設定
PC とは DisplayPort で接続、また、USB でも接続しています。\
計測の精度などは、「編集」=>「環境設定」から変えられます。今回は精度とコントラスト重視で以下のように設定しました。
<div style="width: 80%; margin: auto;">
{{< thumb2 "spectraview_setting0.png" >}}
</div>
<div style="width: 80%; margin: auto;">
{{< thumb2 "spectraview_setting1.png" >}}
</div>

### 目標値とモニタの設定
#### 目標値
- 輝度: 90cd/mm
- 色温度: D65
- ガンマ: カスタム(sRGB)
- 色域: ネイティブ

できるだけ sRGB に近づけられるよう、目標値は下記のようにセットアップ。ちなみに、EA シリーズは色域を設定できないんですね。盲点でした。
SpectraView II の取説によると、PA シリーズのみが色域を設定できるようです。
<div style="width: 80%; margin: auto;">
{{< thumb2 "calibration_target.png" >}}
</div>

#### モニタ側の設定
- RESPONSE IMPROVE: オフ
- UNIFORMITY: オフ

REPONSE IMPROVE がオンだと、黒背景に白文字をスクロールした際に残像が出る気がしたのでオフにしてあります。\
後で書きますが、UNIFORMITY をオンにしてもあまり効果がなく、逆にコントラスト比が低下してしまうのでオフにしました。

### 測定
キャリブレーターをセットして測定していきます。全体で 20 分くらいかかりました。
<div style="width: 80%; margin: auto;">
{{< thumb2 "calibrating.jpg" >}}
</div>

### 結果

キャリブレーション結果です。Spectra View 経由だと使用時間も確認できるんですね。
<div style="width: 80%; margin: auto;">
{{< thumb2 "calibration_result.png" >}}
</div>

色域は緑が sRGB より広いです。
<div style="width: 80%; margin: auto;">
{{< thumb2 "color_space.png" >}}
</div>

