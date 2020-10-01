---
title: 'ブログのコードにsyntax hilightを付けた'
date: '2020-09-30'
coverImage: 'https://source.unsplash.com/p-xSl33Wxyc'
---

# はじめに
このブログの記事はMarkdownで書いているのですが，Markdownをレンダリングするときに[remark](https://github.com/remarkjs/remark)ライブラリを用いています．
デフォルトの remark ライブラリではコードのシンタックスハイライトに対応していないので別にライブラリ等を入れる必要があります．
大したことはしてませんがメモとして残しておきます．

# remark-highlight.jsを入れる
[remark-highlight.js](https://github.com/remarkjs/remark-highlight.js?files=1)とは code タグにクラスを付与してくれるライブラリです．例えばこんな感じになります．
```markdown
<!-- Markdownにこのように書く -->
~~~css
h1 {
  color: red;
}
~~~
```

```html
<!-- HTMLに変換した結果 -->
<pre>
  <code class="hljs language-css">
    <span class="hljs-selector-tag">h1</span> {
      <span class="hljs-attribute">color</span>: red;
    }
  </code>
</pre>
```

### インストール
以下のコマンドでインストールします．

```bash
npm install remark-highlight.js
# or
yarn add remark-highlight.js 
```

インストールしたら remark を使ってるファイルで以下のように書き加えます．
```ts
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import highlight from 'remark-highlight.js' // 書き加える
                      ・
                      ・
  const processedContent = await remark()
    .use(highlight) // 書き加える
    .use(html, { sanitize: false })
    .process(matterResult.content)
                      ・
                      ・
```

# highlight.jsを入れる
[highlight.js](https://highlightjs.org/)とはソースコードをハイライトしてくれるライブラリです．remark-highlight.js で付与したクラス`hljs`などに color などをつけてくれます．
公式サイトにたくさんのテーマがあるので好きなやつを入れましょう．このブログでは Hybrid というテーマにしています．

### インストール
以下のコマンドでインストールします．
```bash
npm install highlight.js
# or
yarn add highlight.js
```

後はインポートするだけです．
```ts
// pages/_app.tsx

import 'highlight.js/styles/hybrid.css'
                        ・
                        ・
```
これでソースコードにシンタックスハイライトが適応されます．

# まとめ
デフォルトの remark ライブラリではコードのシンタックスハイライトに対応していないので別にライブラリ等を入れる必要がある．<br />
そこで，remark-highlight.js を用いて code タグにクラスを付与する．<br />
highlight.js で付与したクラスに color コードを与える．