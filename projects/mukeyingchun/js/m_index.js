/**
 * Created by Administrator on 2016/12/1.
 */

window.onload = function (){

    var sharde = document.getElementById("sharde");
    sharde.onclick = function () {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
        setTimeout(function () {
            document.getElementById("page1").style.display = "none";
            document.getElementById("page2").style.display = "none";
            document.getElementById("page3").style.display = "block";
        }, 5000);
    }

}
