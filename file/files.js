/**
 * Created by Administrator on 2016/10/26 0026.
 */
//获取文件名
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
        throw new Error("您的浏览器不支持file api");
    }
}

/**
 * 是否图片
 * @param obj
 */
function isIMG (obj) {
    getFiles(obj, function (file) {
        if(!/image\/\w+/.test(file.type)){
            alert(file.name + "不是图片文件！");
            throw new Error("error");
        }
    })
}

/**
 * 读取文本文件
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