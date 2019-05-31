function main() {
  //スプレッドシートのkeyを指定して取得
  var spreadsheet = SpreadsheetApp.openById('1YbKiqTPZVs3AzSMw9LNOAm21xHlf7jY_NZQo8iiPW98');
  Logger.log(spreadsheet+"の読み込みを開始しました")//Spreadsheet
  
  //これからGoogleAppsScriptでloopを開始します
  //Number(i)が整数化しています
  //iの変数がスプレッドシートの何行目までを読み込むかを設定します
  for(var i  = 169 ; i <= 195; i++){
    
    //ログに出力(整数ループができているか？)
    Logger.log(Math.round(i));
    Logger.log(Number(i));
       
    //セル(F,i)を表示します。
    var range = spreadsheet.getRange("F"+Number(i));
    //4. 値を取得する
    var value = range.getValue();
        //セル(A,i)を表示します。
    var range2 = spreadsheet.getRange("B"+Number(i));
    //4. 値を取得する
    var value2 = range2.getValue();
        //セル(D,i)を表示します。
    var range3 = spreadsheet.getRange("D"+Number(i));
    //4. 値を取得する
    var value3 = range3.getValue();
    Logger.log(value);
    Logger.log(value2);
    Logger.log(value3);
    Logger.log(value+"@mori.co.jpにメールを送ります（本番アドレスに送信します）");
    
    /* 各データを準備 */
    var strTo = value+"@mori.co.jp"; //To
    var strName ="VPN利用者様"; //苗字
    var strFrom ="k-ikawa@mori.co.jp"; //From
    var strSender ="johounyo@mori.co.jp"; //差出人
 
    /* メール本文を準備 */
    var strSubject = "【要回答】社内直結SIM利用実態調査（回答期限：2019/6/30）【情報システム部より】";
    var strBody = "VPN利用者様(氏名："+value2+"\n"+"　　　　　　　アカウント名："+value+"\n"+"社内直結SIM（トライアル）を利用したことがある方に送付をしております。社内直結SIMの使用感について以下のURLを開いてご回答ください。"+"\n\n"+"https://forms.gle/gx4oa9NUG6GaaiKL9"+"\n";
  
  /* メールを送信 */
  GmailApp.sendEmail(
    strTo,
    strSubject,
    strBody,
    {
      from: strFrom,
      name: strSender
    }
  ); //MailAppではfromが設定できないとのこと
  
  Logger.log("アカウント有効期限の通知メールは全件送信いたしました")
  Logger.log("スプレッドシートの読み取りを開始します")
  
  //100000m秒のスリープを入れます GoogleAppsの連続起動時間は5分なので5分で211人にメールを送れるように1400msのsleepを入れます
  Utilities.sleep(10000);

  //GsuiteでのGmail利用の制限事項
  //https://support.google.com/a/answer/166852
  //GASは5分以上の起動で停止する（http://direction-note.com/gas-beyond-execution-time/）
  
  //Googleが推奨する一括送信のガイドライン
  //マーケティング キャンペーンなどで大量のメールを送信する際には、送信制限の上限に達しないように次のような手段を検討されることをおすすめします

  /*メールの送信を 2 日に分けて行う - 1 つの宛先グループにメッセージを送信したら、24 時間待ってから別のグループに送信します。
  グループ アドレスにメールを送信する - 1 つのグループ アドレスを使って複数のメールアドレスにメールを送信します。たとえば、ドメイン内の全ユーザーをメーリング リストに追加することで、組織内の全ユーザーに連絡できます。詳しくは、グループとグループのポリシーと制限をご覧ください。
  Marketplace のソリューションを使用する - 一括メール送信用のアプリが、さまざまなサードパーティ デベロッパーから提供されています。詳しくは、G Suite Marketplace をご覧ください。
  注: Marketplace のソリューションはサードパーティ デベロッパーが一般向けに作成したものであるため、Google では Marketplace アプリの技術サポートを提供していません。あらかじめご了承ください。。
  App Engine ソリューションを構築する - デベロッパーはカスタム アプリケーションを作成して、メールの上限数を引き上げることができます。詳しくは、メールのための App Engine についてのページをご覧ください。
  ローカルのメールサーバーを使用する - ローカルのメールサーバーをお持ちの場合は、そのサーバーを使用して宛先にメールを直接送信することで送信制限を回避できます。さらに、このローカル サーバーを SPF レコードに追加しておくことで、メールが迷惑メールに分類されるのを防ぐことができます。
  一括送信ガイドラインとおすすめの方法を確認する - メールの受信者から一括送信メールが迷惑メールと報告されることもあるため、すべての受信者がメールの受信を希望していることを確認する必要があります。また、転送ルールやフィルタの設定が正しいかどうか、メールの設定を確認することもできます。詳しくは、一括送信ガイドラインとおすすめの方法についてのページをご覧ください。
  */
    
  //メールが無事に送信されたか否かの確認は送信に使ったGmailアカウントの送信ボックスを確認してください  
  //211人に　1.4秒間隔で動作  
  }  
}