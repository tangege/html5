/**
 * Created by Administrator on 2016/10/25 0025.
 */
/**
 * 画线
 * @param context
 * @param opts
 */
function drawLine (context,opts) {
    context.strokeStyle = opts["color"] || "#000";
    context.beginPath();
    context.moveTo(opts.position[0], opts.position[1]);
    context.lineTo(opts.position[2], opts.position[3]);
    context.stroke();
}

/**
 * 画矩形
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
        throw new Error("arguments was wrong!");
    }
}

//画五角星
function drawStart(ctx, opts) {
    ctx.save();
    ctx.translate(opts.x || 0, opts.y || 0);
    ctx.rotate(Math.PI/180* opts.deg || 0);
    ctx.beginPath();
    for (var i = 0; i < 5; i++) {
        ctx.lineTo( Math.cos( Math.PI/180*(18 + 72*i) ) *opts.R, 
            -Math.sin( Math.PI/180*(18 + 72*i) ) * opts.R
        );
        ctx.lineTo( Math.cos( Math.PI/180*(54 + 72*i) ) * opts.r, 
            -Math.sin( Math.PI/180*(54 + 72*i) ) * opts.r
        );
    }
    ctx.closePath();
    ctx.fillStyle = opts.fillColor || "transparent";
    ctx.lineWidth = opts.lineWidth || 1;
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

//画月亮
function drawMoon(ctx,x,y,deg) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI/180*deg);
    ctx.beginPath();
    ctx.arc(200,200,100,-Math.PI/180*90,Math.PI/180*90, false);
    ctx.moveTo(200,300);
    ctx.quadraticCurveTo(320,200,200,100);
    ctx.fillStyle = "#f00";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
