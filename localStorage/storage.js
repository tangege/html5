/**
 *  localStorage
 */

function LStorage () {
	if(typeof Storage !== undefined){
		if(arguments.length === 2){
			//两个参数 key value	
			localStorage[arguments[0]] = arguments[1];
		}else if(arguments.length === 1 && arguments[0].constructor === String){
			//由key获取 value
			return localStorage[arguments[0]];	
		}else if(arguments.length === 1 && arguments[0].constructor === Object){
			//对象参数
			for( var attr in arguments[0]){
				localStorage[attr] = arguments[0][attr];
			}
		}else if(arguments.length === 0){
			//返回所以的数据
			return localStorage;	
		}
	}else {
		console.log("您的浏览器不支持Storage！");
	}
	
}

/**
 * sessionStorage
 */
function SStorage () {
	if(typeof Storage !== undefined){
		if(arguments.length === 2){
			//两个参数 key value	
			sessionStorage[arguments[0]] = arguments[1];
		}else if(arguments.length === 1 && arguments[0].constructor === String){
			//由key获取 value
			return sessionStorage[arguments[0]];	
		}else if(arguments.length === 1 && arguments[0].constructor === Object){
			//对象参数
			for( var attr in arguments[0]){
				sessionStorage[attr] = arguments[0][attr];
			}
		}else if(arguments.length === 0){
			//返回所以的数据
			return sessionStorage;	
		}
	}else {
		console.log("您的浏览器不支持Storage！");
	}
	
}
	