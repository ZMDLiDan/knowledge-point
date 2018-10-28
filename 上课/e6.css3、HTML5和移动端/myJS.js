// JavaScript Document
function $(id){
	return document.getElementById(id);
}

function getStyle(obj,attr){
	return obj.currentStyle ? 	obj.currentStyle[attr] :  getComputedStyle(obj)[attr];
}

function adZ(iNum){
	return iNum<10 ? "0"+iNum : ""+iNum;
}

function doMove(obj,end,step,attr,endFn){
	step = parseInt(getStyle(obj,attr))<end ? step : -step;
	clearInterval(obj.timer);
	obj.timer = setInterval(function (){
		var nextPlace = parseInt(getStyle(obj,attr)) + step;
		if(nextPlace>=end&&step>0||nextPlace<=end&&step<0){
			nextPlace=end;
		}
		obj.style[attr] = nextPlace + "px";
		if(parseInt(getStyle(obj,attr))===end){
			clearInterval(obj.timer);
			//if(endFn){endFn();}
			endFn && endFn();
		}
	},30);
}