/**
 * Created by Administrator on 2016/10/25 0025.
 */
/**
 * ��ֱ��
 * @param context
 * @param opts
 */
function drawLine (context,opts) {
    if(arguments.length === 2){
        context.strokeStyle = opts["color"] || "#000";
        context.beginPath();
        context.moveTo(opts.position[0], opts.position[1]);
        context.lineTo(opts.position[2], opts.position[3]);
        context.stroke();
    }else {
        throw new Error("�������ԣ�");
    }
}

/**
 * ������
 * @param context
 * @param opts
 */
function drawRectangle (context,opts) {
    if(arguments.length === 2){
        context.strokeStyle = opts["sColor"] || "#000";
        context.fillStyle = opts["fColor"] || "#000";
        context.lineWidth = opts["borderWidth"] || 1;
        switch (opts["flag"]) {
            case "sf":
                context.fillRect(opts.position["x"], opts.position["y"], opts["width"], opts["height"]);
                context.strokeRect(opts.position["x"], opts.position["y"], opts["width"], opts["height"]);
                break;
            case "s":
                context.strokeRect(opts.position["x"], opts.position["y"], opts["width"], opts["height"]);
                break;
            case "f":
            default :
                context.fillRect(opts.position["x"], opts.position["y"], opts["width"], opts["height"]);
                break;
        }
    }else {
        throw new Error("�������ԣ�");
    }
}