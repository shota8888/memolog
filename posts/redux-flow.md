---
title: 'Redux入門 〜 Flow編'
date: '2020-10-15'
coverImage: '/images/posts/redux-flow/redux.png'
---

# はじめに
この記事はReduxのアウトプットとしてまとめた記事(Flow編)です．

# Reduxとは
Reduxはstateを管理するためのライブラリです．状態の管理が大規模になるとReactだけでは複雑になるためReduxを使ってストアにstateを保存しデバックや開発をしやすくしようということです．

# Flux
Fluxとはデータフロー設計の一つであり，Reduxの設計思想の基になったものです．Fluxフローはデータが常に一方向に流れ，イベントによってデータが変化します．下の図が公式ドキュメントに載ってるデータフローです．

![Fluxフロー](/images/posts/redux-flow/flux.png)
<br>

# Reduxの全体像
Reduxのフローに関わる主な登場人物は
* Action
* Dispatch
* Reducer
* Store

です．それぞれの詳しい説明は別の記事で説明するので，今回は全体の流れを見ていきます．

全体図はこんな感じになります．
![全体図](/images/posts/redux-flow/flow.png)

この図だけでは難しいのでこの流れをオンラインショップアプリに例えて見ていきます．

### Connected Component
Connected Componentがショップアプリのフロント部分です．そしてその中にある，商品などがComponentです．ユーザーが実際に見て触ることができます．

### ActionとDispatch
アプリ内に架空の人がいると想定すると，Actionはショップのスタッフです．要求を受けて変更を依頼します．<br>
例えばユーザーがスタッフの人にこの商品が欲しいことを伝えると，スタッフは在庫を管理している人に要求を依頼します．この要求を依頼することがDispatchです．

### Reducer
Reducerは在庫を管理している人です．変更を管理します．スタッフ(Action)から受けた要求に対して在庫があるかを確認し，倉庫に要求を出します．

### Store
Storeは倉庫です．状態を保存します．管理人(Reducer)から伝えられた内容をもとに在庫から商品を取り出します．

### mapStateProps/mapDispatchToProps
mapStatePropsとmapDispatchToPropsは状態をConnected Componentに渡し，ショップ内の在庫情報を変えます．つまり，アプリ内に表示されている在庫数の情報を変化させます．

<br>

最後に例えなしで見ていきましょう．
1. まず，ユーザーがWebページにアクセスするとURLに応じてConnected Componentが表示されます．その中にComponentがいくつかあります．
2. ユーザがComponentを操作しイベントを発生させるとActionが実行され，Actionは変更の内容をReducerに伝えます(Dispatch)．
3. Reducerはその変更の内容を受けてStoreに変更する内容を伝えます．
4. そして，Reducerから受けた内容をもとにStoreは状態を変更します．
5. 変更した情報をmapStatePropsとmapDispatchToPropsを通してConnected Componentに伝え，表示を変更します．

以上がざっくりとしたReduxのフローになります．

