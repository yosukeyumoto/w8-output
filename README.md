>>>>>>コマンドショートカット一覧<<<<<<

・ctrl + Enter：カーソルが文字の真ん中でも文字を崩さず改行する
・ctrl + D：選択文字列と同じ文字列をファイルから複数選択し、カーソルを共有できる。
・行範囲選択 + shift + tab：左揃え
・ctrl + shift + 横矢印：行内範囲選択
・alt + 上下キー：カーソル行上下の入れ替え
・shift + alt + 上下キー：カーソル行コピー
・ctrl + alt + 上下キー：カーソル行複数選択
・ctrl + P：キーワード検索にプロジェクトファイルを表示する
・ctrl + shift + P：>Compareと入力し、'Compare Active File with Clipboardより、
   今選択しているファイルとクリップボードコピー中のコードを比較する
・ctrl + "+" or "-"：画面の拡大率調整


>>>>>>実用的新知識(実用的でないものはEverNoteを参照)<<<<<<
・ctrl+shift+P：コマンドパレットを開く(左上のviewからも選択して開ける)
　・「>Compare」と入力し、「Compare Active File with Clipboard」が使える
　・「>Format Document」と入力しEnterを押すと設定した間隔でインデントを付けてくれる。
・**でべき乗演算が出来る。
・undefinedとは、意図してnullを入れているかコンピュータが分からない時に返される値
・typeofを使うとそれぞれの値が何型か返してくれる。
　・console.log(typeof "サンダース");の場合：stringが返ってくる。
・標準組み込み関数
　・parseInt("")：引数に文字列を渡すと数値型に変換してくれる。
　・配列1.concat(配列2)：配列1に配列2を追加する。
　・チートシートはEverNoteを参照！！
・標準組みこみオブジェクト
　・console：log()はconsoleオブジェクトの関数
。

>>>>>>実践的新知識(フロントエンド)<<<<<<
・ブラウザーAPI
　・window
　・document.innerHTML："テキスト"※""の中にタグ<div>等も入れられる。
　・Promiseオブジェクト
　　・非同期通信が成功したか失敗したかの情報を返す。
　　・非同期処理は同期処理とは別のスレッドで実行されていると考える。
　・querySelectorは取得した要素の一番最初の要素しか返さない
・text-align: centerはdiv要素の中身を中央寄せにする。
　・aline-item: centerはdiv要素にdisplay:flexを適用した要素の縦軸を中央寄せにする。
　　・justfy-content:centerとすると更に横軸の中央寄せになる。
・box-sizing:border-boxにすると、height/widthで指定した範囲にpadding/marginを含めることが出来る。
　設定していない場合は、指定した範囲に別途padding/marginがプラスされて計算が面倒になるので忘れずに設定する。
・addEventListenerのイベントで取得した要素は、イベント関数に渡せる
　・その本体は、呼び出し先でe.currentTargetで取得する。
　・第2引数の関数に引数がある場合は、(e) => clickHandler(e)となり、なければclickHandlerになる。
・即時間数は、(()=>{})();で定義する。
　・即時間数内の変数・関数はローカル化出来るので跨ったファイル同士同じ変数名・関数名が使える。