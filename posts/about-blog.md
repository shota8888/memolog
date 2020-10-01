---
title: 'Next.js + TypeScriptで技術ブログを作った'
date: '2020-09-19'
coverImage: 'https://source.unsplash.com/Fk2DGAaZJGs'
---

# このブログについて
Next.js の勉強をしようと思い，Next.js のチュートリアルを基にできたのがこのブログです．最初からブログを作ろうとは思っていなくて，勉強していたらブログができていました．せっかくなのでこのブログに日々の勉強したメモを残していこうと思います．<br>
今回は特に書くことがないので，このブログでしたことと，これから実装していきたいことを書いていきます．

# 技術スタック
基本的にはチュートリアルにそったので根幹は変わっていません．
* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Material-UI](https://material-ui.com/)
* [Vercel](https://vercel.com/dashboard)

スタイリングはチュートリアルでは CSS Module を使っていますが，今回は styled-components と Material-UI を使いました．

# 追加した機能
* プロフィール欄
* ページネーション

機能としてはチュートリアルだけでも十分なのですが，少し質素だったので，プロフィールとページネーションを追加しスタイルを整えました．<br>
プロフィール蘭はゴリゴリに Material-UI を使ってしまったので，後々変えていくつもりです．<br>
ページネーションは新たに Paginationコンポーネントと動的なページとして，[page].jsを作成しました．

```ts
// posts/[page].tsx

export const getStaticProps: GetStaticProps<BlogProps, PageUrl> = async ({ params }) => {
  const posts = getSortedPostsData();
  const pages = convertTo2D(posts, Config.pagination_size);
  const currentPage = Number(params!.page.replace('page', ''));
  const currentInd = currentPage - 1;

  const pagination: PaginationProps = {};

  pagination.current = currentPage;

  if (currentPage < pages.length) {
    pagination.next = `page${currentPage + 1}`;
  }

  if (currentPage === 2) {
    pagination.previous = '/';
  } else {
    pagination.previous = `page${currentPage - 1}`;
  }

  return {
    props: {
      posts: pages[currentInd],
      pagination,
    },
  };
}
```

2ページ目以降のリンクを```/pageページ数```にしています．getStaticProps で現在のページ数を取得し，前のページ，次のページを`pageページ数`（2ページ目だったら`page2`）の文字列としてPaginationコンポーネントに渡しています．

# 実装したいこと
* ~~ソースコードのシンタックスハイライト~~
  * ~~Markdown でブログを書いて，remark でHTMLにレンダリングするときにコードブロックをシンタックスハイライト対応させる．~~
* ダークモード対応
  * 切り替えボタンでダークモードに切り替えられるようにする．
* タグ機能の追加
  * 記事にタグを埋め込んで管理する．

これから実装したいことがたくさん出てきそうなので，ここは随時更新していきます．これから少しづついい感じのブログにしていきたいです．
