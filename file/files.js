/**
 * Created by Administrator on 2016/10/26 0026.
 */
//��ȡ�ļ���
function getFiles (obj, fn) {
    var files = obj.files;
    if(files){
        for( var i = 0,len = files.length; i < len; i++){
            var file = files[i];
            if(typeof fn === "function"){
                fn.call(file,{
                    name: file.name,
                    type: file.type,
                    size: file.size
                })
            }
        }
    }else {
        throw new Error("�����������֧��file api");
    }
}

/**
 * �Ƿ�ͼƬ
 * @param obj
 */
function isIMG (obj) {
    getFiles(obj, function (file) {
        if(!/image\/\w+/.test(file.type)){
            alert(file.name + "����ͼƬ�ļ���");
            throw new Error("error");
        }
    })
}

/**
 * ��ȡ�ı��ļ�
 * @param fileobj
 * @param outputobj
 */
function readText (fileobj, outputobj) {
    var file = fileobj.files[0];
    if(file && typeof FileReader !== "undefined"){
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (f) {
            outputobj.innerHTML = this.result;
        }
    }
}