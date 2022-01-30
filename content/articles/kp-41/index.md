---
title: "Kernel Power 41 の原因と対処法"
date: 2020-09-07T00:06:51+09:00
draft: false 
---

### ブルースクリーン
先月末、メインの自作機で頻繁にブルースクリーンが発生するようになりました。
ゲームをしているとき、ブラウジングしているとき、タイミングは様々です。
そのほか、Firefox のタブが頻繁にクラッシュする症状もありました。

イベントビューアを見ると、「Kernel Power 41」というエラーコードが表示されていました。KP41 病と呼ばれていて、原因がさまざまなため非常に対処しづらいエラーです。

実は先代のパソコンでもこのエラーにハマったことがあります。その時の原因はなんと USB 接続のマウスでした。
それまでは何事も無く使用していたマウスが原因だったのです。結局新しいマウスに変えて事なきを得ました。

### PCの環境

<dt> CPU </dt>
<dd> <a href="https://www.amd.com/ja/products/cpu/amd-ryzen-7-2700x">
AMD Ryzen 7 2700X </a> (CPBオフ) <dd>

<dt> GPU </dt>
<dd> <a href="http://www.palit.com/palit/vgapro.php?id=3303&lang=jp">
Palit Microsystems RTX 2070 Super JS 8GB NE6207SS19P2-1040J </a> </dd>

<dt> OS </dt>
<dd> <a href="https://www.microsoft.com/ja-jp/windows">
Microsoft Windows 10 Pro 64bit </a> </dd>

<dt> マザーボード </dt>
<dd> <a href="https://www.asrock.com/MB/AMD/X470%20Master%20SLI/index.jp.asp">
AsRock X470 Master SLI </a> </dd>

<dt> メモリー </dt>
<dd> <a href="http://www.gskill.com/en/product/f4-3400c16d-16gsxw">
G.Skill F4-3400C16D-16GSXW </a> x 2 (計32GB) </dd>

<dt> ケース </dt>
<dd> <a href="https://www.fractal-design.com/ja/products/cases/define/define-r5/white/">
fractal design Define R5 White </a> </dd>

<dt> 電源 </dt>
<dd> <a href="https://apac.coolermaster.com/jp/powersupply/gaming-v-sm-series/v750s/">
COOLER MASTER V750 Semi-Modular </a> </dd>

<dt> SSD1 </dt>
<dd> <a href="https://www.intel.co.jp/content/www/jp/ja/products/memory-storage/solid-state-drives/consumer-ssds/545s-series.html">
Intel SSD 545s SSDSC2KW512G8X1 </a> (512GB) </dd>

<dt> SSD2 </dt>
<dd> <a href="https://www.cfd.co.jp/product/ssd/ct1000mx500ssd1_jp/">
Crucial MX500 CT1000MX500SSD1/JP </a> (1000GB) </dd>

<dt> HDD </dt>
<dd> <a href="https://kakaku.com/item/K0000927098/">
Western Digital WD40EZRZ-RT2 </a> (WD Blue 4TB) </dd>

<dt> BDドライブ </dt>
<dd> <a href="https://jpn.pioneer/ja/pcperipherals/bdd/products/bdr_211j/">
Pioneer BDR-211JBK </a> </dd>

<dt> CPUファン </dt>
<dd> <a href="https://www.scythe.co.jp/product/cpu-cooler/scktt-2000">
サイズ 虎徹 MarkⅡ </a> </dd>

<dt> CPUグリス </dt>
<dd> <a href="https://www.shinwa-sangyo.co.jp/thermal-grizzly/tg-k-001-rs">
Thermal Grizzly Kryonaut </a> </dd>

<dt> テレビボード </dt>
<dd> <a href="https://earthsoft.jp/PT3/index.html">
アースソフト PT3 </a> </dd>

<dt> USB端子増設ボード</dt>
<dd> <a href="https://www.kuroutoshikou.com/product/interface/usb/usb3_0ra-p4-pcie/">
玄人志向  USB3.0RA-P4-PCIE </a> (PCI-Express 接続・USB 3.0 x 4) </dd>


### 原因を調べる

#### 1. GPU のドライバの再インストール
落ちるタイミングに法則性がなかったので、システムに近い部分に原因があると考え、GPU のドライバを入れなおしてみることにしました。

[Display Driver Uninstaller](https://www.guru3d.com/files-details/display-driver-uninstaller-download.html)を使ってドライバを完全に削除し、NVIDIA Studio Driver の最新版をインストールしました。
結局、これでは直りませんでした。

#### 2. Windows のシステムファイルの整合性のチェック
[Windows 10 でシステム ファイル チェッカーを使う](https://support.microsoft.com/ja-jp/help/4026529/windows-10-using-system-file-checker)

こちらの記事を参考にシステムファイルの修復をしました。いくつかのファイルが破損していたようでしたが、無事に修復できたようです。
しかし、KP41 の解決にはつながりませんでした。

#### 3. MemTest86
友人に言われてメモリのテストもしてみました。
[MemTest86 の本家](https://www.memtest86.com/)を使いました。

パソコンを組んだ時に執拗にテストを回していたので、まさかメモリが原因ということはないだろうと高をくくっていましたが、
実行してみると大量のエラーが出てきました…。

<div style="width: 80%; margin: auto;">
{{< thumb2 "memtest.jpg" >}}
</div>

### 原因
原因はメモリの動作周波数にありました。

2933MHz で問題なく動作していたメモリが、
なぜか 2400MHz まで落とさないと安定して動作しなくなってしまいました。

Ryzen のパフォーマンスはメモリ周波数に依存しているので、できればあまり落としたくありません。しかし、安定して動作してくれないと困りますのでしばらくはこの設定で行きたいと思います。

メモリ・マザボ・CPU のどれかが経年劣化していそうなので(まだ2年しか経ってないけど…)、3700X と X570、ECC メモリで新しく組みたいですね。
Zen3 が出たら 3700X 投げ売りされないかな～。
