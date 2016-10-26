/**
 * Created by Administrator on 2016/10/26 0026.
 */
//获取文件名
function getFileName (obj) {
    var result = [];
    var files = obj.files;
    if(files){
        for( var i = 0,len = files.length; i < len; i++){
            var file = files[i];
            result.push(file.name);
        }
    }else {
        var name = obj.value.substring(obj.value.lastIndexOf("\\") + 1);
        result.push(name);
    }
    return result;
}