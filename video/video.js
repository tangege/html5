/**
 * Created by Administrator on 2016/10/31 0031.
 */
//设置元素宽度
function width (videoobj, width){
    videoobj.width = width;
}

//设置元素高度
function height (videoobj, height) {
    videoobj.height = height;
}

//报错
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
                    alert("视频下载过程被终止！");
                    break;
                case 2:
                    alert("网络发生故障，视频下载过程被终止！");
                    break;
                case 3:
                    alert("解码失败。");
                    break;
                case 4:
                    alert("不支持播放的视频格式。");
                    break;
                default :
                    alert("发生未知错误。");
                    break;
            }
        })
    }
}

//检测视频类型是否能被播放
function checkVideoType (type) {
    var video = document.createElement("video");
    if(video.canPlayType){
        if("" !== video.canPlayType(type)){
            return true;
        }
    }
    return false;
}

//检测音频类型是否能被播放
function checkAudioType (type) {
    var audio = document.createElement("audio");
    if(audio.canPlayType){
        if("" !== audio.canPlayType(type)){
            return true;
        }
    }
    return false;
}

//返回媒体的url属性
function getVideoURL (videoobj) {
    return videoobj.currentSrc;
}