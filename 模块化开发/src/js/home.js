
/*
	requre:引入文件
 */

require(['config'],function(){
	//这里的代码在config文件加载完成后执行
	
	require(['common','jquery','gdszoom'],function(){
		var home = {
			init:function(){
				// 需要common.js
				console.log('home init');

				common.randomNum();
			},
			nav:function(){}
		}


		home.init();
	})
});

