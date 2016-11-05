
/*
	拖拽

*/
function dragToSomeWhere( drag, drop) {
	
		var draggable = drag.getAttribute("draggable");
		if( !draggable ){
			drag.setAttribute("draggable", "true");	
		}
		drop.addEventListener("dragover", function (ev) {
			ev.preventDefault();
		}, false);

		drag.addEventListener("dragstart", function (ev) {
			ev.dataTransfer.setData("Text",ev.target.id);
		}, false)

		drop.addEventListener("drop", function (ev) {
			ev.preventDefault();
			ev.stopPropagation();
			var data = ev.dataTransfer.getData("Text");
			ev.target.appendChild(document.getElementById(data));
		}, false);

}