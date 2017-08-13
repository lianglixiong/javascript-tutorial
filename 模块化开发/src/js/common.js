/*
	购物车
 */
// (function(){
// 	var common = {
// 		randomNum:function(){
// 			console.log('common randomNum');
// 		},
// 		randomColor:function(){},
// 		ajax:function(){},
// 		getElement:function(){}
// 	}
// })();


// requirejs定义模块标准
// 在定义模块时设置依赖(预加载)
define(['jquery'],function($){
	return {
		randomNum:function(min,max){
			return Math.floor(Math.random()*(max-min+1))+min;
		},
		randomColor:function(){},
		ajax:function(){
			$.ajax({
				url:'/data/weibo.json?d='+Math.random(),
				success:function(){}
			});
		},
		getElement:function(){}
	}
});