// JavaScript Document

function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; 
}

function doMove(obj,step,end,attr,endFn){
	clearInterval(obj.timer);
	step = end>parseInt(getStyle(obj,attr)) ? step : -step;
	obj.timer = setInterval(function (){
		var nowLeft = parseInt(getStyle(obj,attr))+step;
		if(nowLeft>=end&&step>0||nowLeft<=end&&step<0){
			nowLeft = end;
		}
		obj.style[attr] = nowLeft+"px";
		if(parseInt(getStyle(obj,attr))==end){
			clearInterval(obj.timer);
			/*if(endFn){
				endFn();
			}*/
			endFn && endFn();
		}
	},30)
}

function addZ(num){
	return num<10 ? "0"+num : ""+num;
}