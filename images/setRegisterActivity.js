/*
 *
 * 登記送共用JS-多顆登記按鈕版
 * ecchao 2018.05.29
 * 
 */


var registerPromo = 
[
  {
    m_promoNo    : 'M20210520003',                    //主檔代碼
    dt_promoNo   : ['D20210520001'],   //明細檔代碼
    gift_code    : ['Gift001'],            //獎品檔代碼
    gift_content : {'D20210520001' : '$4%momo幣'},      //獎品名稱
    cntType      : '1007',                            //取目前"剩餘"登記人數(固定用1007),取目前登記人數(固定用1003)
    listType     : '1003'                             //取登記紀錄(固定1003)
    //以上兩個Type參數有做防呆，若需要用到其他參數，要先詢問IT，THX
  },
]