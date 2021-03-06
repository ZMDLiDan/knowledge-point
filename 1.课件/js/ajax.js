// JavaScript Document
function ajax(url,fnSucc,fnFaild){
	//参数：1、连接服务器的地址；2、成功时函数；3、失败时函数
	//1、创建Ajax对象
	var oAjax = null;
	if(window.XMLHttpRequest){
		oAjax = new XMLHttpRequest(); //ie6及以下不兼容
	}else{
		oAjax = new ActiveXObjext("Microsoft.XMLHTTP");
	}
	
	//2、连接服务器
	oAjax.open('GET',url,true);
	
	//3、发送请求
	oAjax.send();
	
	//4、接收服务器的返回
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState ==4){  //完成
			if(oAjax.status ==200){
				//alert('成功： '+oAjax.responseText);
				fnSucc(oAjax.responseText);
			}else{
				//alert('失败');
				if(fnFaild){
					fnFaild();
				}
			}
		}
	}
}