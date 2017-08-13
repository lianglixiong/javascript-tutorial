/*
	详情
 */

// baseUrl:js/config.js
require(['config'],function(){
	// 只要common定义成符合标准的模块，就可以在回调函数中使用模块
	require(['jquery','common','gdszoom'],function($,com,gdsz){
		$('.goods').gdszoom();

		// 调用ajax
		com.ajax();
	});
})