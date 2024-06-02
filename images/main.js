const swiper = new Swiper('.swiper', {
  Mode: true,
  loop: true,
  // Optional parameters
  
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay:{delay:4000, disableOnInteraction:false}
	
  });	  	

  $(window).on('load',function(){
  lazyLoadInstance.update(); //重新觸發圖片延遲,針對共用素材,無限輪播
	
  });

  /* 浮層區*/
function agree(val) {
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 75 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH / 2 - this_agreeH / 2 );
	removeEditBtn()
}
$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});

function removeEditBtn() {
    function isInEcmWriter() {
        let isInEcmWriter = document.querySelectorAll('input[id^="eWriterBtn"]').length > 0; //ECM編輯模式
        return isInEcmWriter;
    }
  
    if(isInEcmWriter()) {
      let editBtv = document.querySelector('.notice-list input')
      editBtv.parentElement.remove()
    }
}

window.onload = function() {
  var img = new Image();
  img.src = 'images/header_title2_2.png';
}
