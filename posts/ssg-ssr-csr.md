---
title: 'SSGとSSRとCSRについて'
date: '2020-09-19'
coverImage: 'https://source.unsplash.com/OqtafYT5kTw/400x280'
---

# はじめに
このブログをNext.jsを用いて作成するにあたって，Static Site Generator(SSG)やServer Side Rendering(SSR)，Client Side Rendering(CSR)の概念について理解することが重要だったので，ここにまとめておく．

# Static Site Generator(SSG)
SSGは日本語で静的サイトジェネレータといい，静的なサイトを生成するためのもの．
アプリの**ビルド時**に必要なデータを取得し，HTMLファイルを生成する．このHTMLはリクエストごとに再利用されCDNによってキャッシュできる．
ビルド時にHTMLを生成するので，ページを表示するまでの時間はSSRやCSRよりも高速であり，SEO的にも良い．一方，外部データが更新されると再ビルドを行わないと反映されないので，外部データが頻繁に更新されるページなどには向かない．ブログやECサイトなど更新頻度が低いページに最適．