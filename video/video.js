/**
 * Created by Administrator on 2016/10/31 0031.
 */
//����Ԫ�ؿ��
function width (videoobj, width){
    videoobj.width = width;
}

//����Ԫ�ظ߶�
function height (videoobj, height) {
    videoobj.height = height;
}

//����
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
                    alert("��Ƶ���ع��̱���ֹ��");
                    break;
                case 2:
                    alert("���緢�����ϣ���Ƶ���ع��̱���ֹ��");
                    break;
                case 3:
                    alert("����ʧ�ܡ�");
                    break;
                case 4:
                    alert("��֧�ֲ��ŵ���Ƶ��ʽ��");
                    break;
                default :
                    alert("����δ֪����");
                    break;
            }
        })
    }
}

//�����Ƶ�����Ƿ��ܱ�����
function checkVideoType (type) {
    var video = document.createElement("video");
    if(video.canPlayType){
        if("" !== video.canPlayType(type)){
            return true;
        }
    }
    return false;
}

//�����Ƶ�����Ƿ��ܱ�����
function checkAudioType (type) {
    var audio = document.createElement("audio");
    if(audio.canPlayType){
        if("" !== audio.canPlayType(type)){
            return true;
        }
    }
    return false;
}

//����ý���url����
function getVideoURL (videoobj) {
    return videoobj.currentSrc;
}