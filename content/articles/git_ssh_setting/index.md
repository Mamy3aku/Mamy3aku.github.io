---
title: "GitHub に ssh の公開鍵と秘密鍵を設定して接続する方法"
date: 2020-07-05T00:06:51+09:00
draft: false 
---

GitHub から pull したり、 push したりするときにいちいちユーザーID とパスワードを打つのが面倒なので、ssh の秘密鍵と公開鍵を使ってログインできるように設定します。

#### 公開鍵と秘密鍵の作成
~/.ssh ディレクトリを作り、そこに移動し以下のコマンドを実行してください。
```zsh
ssh-keygen -t rsa
```
これで、公開鍵(id_rsa.pub)と秘密鍵(id_rsa)のペアを作成します。\
途中でパスフレーズを設定すると、この鍵のペアを使ってログインするときにパスフレーズの入力が必要になります。\
セキュリティ上は設定したほうが好ましいですが、いちいち打つのが面倒なので私はパスフレーズは設定しませんでした
(もし、 PC を盗まれた場合に秘密鍵が漏れることになりますから、絶対に盗まれないようにするか、 BitLocker とかでドライブを暗号化しておくことをお勧めします)。

#### ~/.ssh/config の設定
~/.ssh/config に以下のように追記します(なければ作成してください)。\
Host はただの名前で好きなように決めてもらって構いません。\
重要なのは HostName と User と IdentityFile です。これを間違えると繋がりません。
{{< code lang="zsh" title="~/.ssh/config" >}}
Host github.com
    HostName github.com
    User shumatsu7
    IdentityFile ~/.ssh/id_rsa
{{< /code >}}

#### GitHub 側の設定
[GitHub の SSH and GPG keys](https://github.com/settings/keys) にアクセス、「New SSH key」をクリックし、「Key」に id_rsa.pub の中身をコピペします。\
Title はどの端末の公開鍵かわかるように適当につけてください。
<div style="width: 70%; margin: auto;">
{{< thumb2 "github_ssh_key.png" >}}
</div>

#### git のローカルリポジトリの設定
もし、今まで https でやり取りしていた場合、ssh が使われないので設定を変えます。
git のローカルリポジトリに移動し、
```zsh
git remote set-url git@github.com:[GitHub のユーザID]/[リモートリポジトリ名].git
```
とします。
これで pull とか push するときにパスワードを聞かれなくなるはずです。


#### さくらの設定
ちなみに、さくらサーバーの場合はダッシュボードからか、サーバーの ~/.ssh/authorized_keys に公開鍵(id_rsa.pub)を追記することでも登録できます。

