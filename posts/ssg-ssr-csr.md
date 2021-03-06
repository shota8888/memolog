---
title: 'SSGとSSRとCSRについて'
date: '2020-09-20'
coverImage: 'https://source.unsplash.com/OqtafYT5kTw'
---

# はじめに
このブログをNext.jsを用いて作成するにあたって，Static Site Generator(SSG)やServer Side Rendering(SSR)，Client Side Rendering(CSR)の概念について理解することが重要だったので，ここにまとめておくことにします．

# Static Site Generator(SSG)
SSGは日本語で静的サイトジェネレータといい，静的なサイトを生成するためのもの．アプリの**ビルド時**に必要なデータを取得し，HTMLファイルを生成する．このHTMLはリクエストごとに再利用されCDNによってキャッシュできる．<br />
ビルド時にHTMLを生成するので，ページを表示する速度はSSRやCSRよりも高速であり，SEO的にも良い．また，サーバを必要としないのでセキュリティ面でも安全である．<br />
一方，外部データが更新されると再ビルドを行わないと反映されないので，外部データが頻繁に更新されるページなどには向かない．ブログやECサイトなど更新頻度が低いページに最適．

# Server Side Rendering(SSR)
SSRは**毎回のリクエスト**ごとにサーバ側で処理を行い，HTMLファイルを生成する．そのためサーバの負荷は高くなり，ページを表示する速度はSSGよりも遅い．しかし，Pre-renderingされたページは常に最新の状態になるため，SNSや動画配信サービスなどのデータが頻繁に更新されるページに向いている．

# Client Side Rendering(CSR) 
CSRはJavaScriptを使用して，直接ブラウザでレンダリングする．全ての処理はサーバではなくクライアント上で行われる．ページ遷移は高速だが，アプリが大きくなるとJavaScriptの量が増えるため，処理能力が分散してしまったり，初期表示が遅くなる．また，SEO的にも不利なので，SEOを考慮しない管理画面などに向いている．

# どのように使い分けるか

| |SGR|SSR|CSR|
|:---:|:---:|:---:|:---:|
|HTMLの生成時|ビルド時|リクエスト時|リクエスト時|
|SEO|◎|◯|×|
|適したアプリ|ブログ，<br>ECサイト，etc.|SNS，<br>動画配信サイト，etc.|管理画面，etc.|

このようになるため，ユーザのリクエストに先立ってPre-renderingすることができるページは，高速でSEO的にも良いSGRを選択すべき．

# 参考記事
[SSR、SSG、Client Side Renderingの違いをまとめた](https://qiita.com/akashixi/items/84cd79e090a283bb8c67)