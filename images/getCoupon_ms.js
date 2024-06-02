var checkCouponNum = '';
var checkCouponMsg = '';
function sendCouponNum(cp_no){
  momoj().MomoLogin({GoCart:false, LoginSuccess:function() {
    if(checkCouponNum != cp_no){
      checkCouponNum = cp_no;
      var jsonData = new Object();
      jsonData.flag = '3002';
      jsonData.data = {
        cp_no: cp_no
      }
      momoj.ajax({
        type: 'POST',
        dataType: 'json',
        data: {data:JSON.stringify(jsonData)},
        url: '/servlet/MemberCenterServ',
        error: function(){
          alert('歸戶失敗，請重新輸入');
          checkCouponNum='';
        },
        success: function(objData){
          switch(objData.rtnCode) {
            case '101':
              alert('折價券歸戶成功');
              checkCouponMsg = '折價券號資訊已列在表中';
              break;
            case '210':
              alert('折價券號不存在');
              checkCouponMsg = '折價券號不存在';
              break;
            case '211':
              alert('折價券號不能使用');
              checkCouponMsg = '折價券號不能使用';
              break;
            case '212':
              alert('折價券號已使用過');
              checkCouponMsg = '折價券號已使用過';
              break;
            case '213':
              alert('折價券號資訊已列在表中');
              checkCouponMsg = '折價券號資訊已列在表中';
              break;
            case '214':
              alert('折價券號已過期');
              checkCouponMsg = '折價券號已過期';
              break;
            case '215':
              alert('折價券號不允許自行登錄');
              checkCouponMsg = '折價券號不允許自行登錄';
              break;
            case '301':
            case '998':
              alert('歸戶失敗，請重新輸入');
              checkCouponNum='';
              break;
          }
        }
      });
    }
    else{
      if(checkCouponMsg!=''){
        alert(checkCouponMsg);
      }
      else{
        alert('系統錯誤，請重新整理頁面');
      }
    }
  }}); 
}