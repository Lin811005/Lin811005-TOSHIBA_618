  /**
 * youtube判斷是否隱藏div
 */
var isUseApp = false;
var uagt = navigator.userAgent;
momoj(document).ready(function(){
  if(uagt.toLowerCase().indexOf("momoshop") >= 0){
    isUseApp = true;
  }
  chkYoutube();
});

function chkYoutube(){
  var youtubeDiv = momoj('body').contents().find('.youtubeDiv');
  if(youtubeDiv && youtubeDiv.length > 0){
    if(!isUseApp || getMobileOperatingSystem() == "iOS"){ //若不是使用APP，或者為IOS，則隱藏div覆蓋
      youtubeDiv.hide();
    }    
  }
}
var notifyAppObj = new momoAppBridge("shop");
function callAppToSendYoutubeSrc(obj, youtubeSrc){
  var videoId = getYoutubeVideoID( youtubeSrc );
  if(videoId == ""){
    momoj(obj).hide();
  }else{
    var reBuildYoutubeSrcForApp = "https://www.youtube.com/watch?v=" + videoId;
    notifyAppObj.notifyApp("playLinkInYoutube",reBuildYoutubeSrcForApp);
  }
}

function getYoutubeVideoID( url ) {
  var videoID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if( url[2]!== undefined ) {
    videoID = url[2].split(/[^0-9a-z_\-]/i);
    videoID = videoID[0];
  } else {
    videoID = url;
  }
  
  return videoID;
}
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}