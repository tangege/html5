/**
 * Created by Administrator on 2016/10/31 0031.
 */
//设置视频宽
function width (videoobj, width){
    videoobj.width = width;
}

//设置视频高
function height (videoobj, height) {
    videoobj.height = height;
}

//±¨´í
function loadingError (videoobj) {
    var videsArr = [];
    if(typeof videoobj !== "undefined" && videoobj){
        videsArr.push(videoobj);
    }else {
        var videos = document.getElementsByTagName("video");
        videsArr = videos;
    }
    for(var i = 0,len = videsArr.length; i < len; i++){
        videsArr[i].addEventListener("error", function () {
            var error = this.error;
            switch (error.code){
                case 1:
                    alert("ÊÓÆµÏÂÔØ¹ý³Ì±»ÖÕÖ¹£¡");
                    break;
                case 2:
                    alert("ÍøÂç·¢Éú¹ÊÕÏ£¬ÊÓÆµÏÂÔØ¹ý³Ì±»ÖÕÖ¹£¡");
                    break;
                case 3:
                    alert("½âÂëÊ§°Ü¡£");
                    break;
                case 4:
                    alert("²»Ö§³Ö²¥·ÅµÄÊÓÆµ¸ñÊ½¡£");
                    break;
                default :
                    alert("·¢ÉúÎ´Öª´íÎó¡£");
                    break;
            }
        })
    }
}

//是否支持视频格式播放类型
function checkVideoType (type) {
    var video = document.createElement("video");
    if(video.canPlayType){
        if("" !== video.canPlayType(type)){
            return true;
        }
    }
    return false;
}

//是否支持音频格式播放类型
function checkAudioType (type) {
    var audio = document.createElement("audio");
    if(audio.canPlayType){
        if("" !== audio.canPlayType(type)){
            return true;
        }
    }
    return false;
}

//返回video   url
function getVideoURL (videoobj) {
    return videoobj.currentSrc;
}

//是否支持video元素   
function isSupportVideo() {
    return !!(document.createElement("video").canPlayType);
}