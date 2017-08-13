;(function($){
	$.fn.gdszoom = function(options){
		var defaults = {
			// 大图区域宽高
			width:300,
			height:300,

			// 大图位置
			position:'right',

			// 大图与小图的间距
			gap:15
		}

		// 覆盖默认参数
		var opt = $.extend({},defaults,options);

		// 遍历jquery对象
		return this.each(function(){
			var $small = $(this);

			// 添加插件样式
			$small.addClass('gds-zoom');

			var $smallImg = $(this).children('img');

			// 生成大图
			// $smallImg.data('msg',{})

			// 先获取大图的路径
			var bigUrl = $smallImg.data('big');//$smallImg.attr('data-big')
			var $big = $('<div/>').addClass('gds-bigzoom');
			var $bigImg = $('<img/>').attr('src',bigUrl);

			// 计算大图与小图的比率
			// $bigImg[0].onload = function(){
				
			// }
			
			// 小图与大图比率
			var ratio;

			$big.append($bigImg);

			// 把大图写入页面
			$big.appendTo('body');

			// 设定大图区域样式
			// 大图没写入页面，无法获取宽度
			$big.css({width:opt.width,height:opt.height});

			if(opt.position === 'right'){
				$big.css({
					left:$small.offset().left + $small.outerWidth() + opt.gap,
					top:$small.offset().top
				});
			}else if(opt.position === 'left'){
				$big.css({
					left:$small.offset().left - opt.width - opt.gap,
					top:$small.offset().top
				})
			}else if(opt.position === 'bottom'){
				$big.css({
					left:$small.offset().left,
					top:$small.offset().top + $small.outerHeight() + opt.gap
				})
			}

			// 生成放大镜
			var $minzoom = $('<span/>').addClass('minzoom');
			$minzoom.appendTo($small);

			

			// 鼠标移入显示放大镜/大图
			$small.on('mouseenter',function(){
				// 更新大图url
				$bigImg.attr('src',$smallImg.attr('data-big'));

				$minzoom.show();
				$big.show();

				ratio = $smallImg.outerWidth()/$bigImg.outerWidth();
				// console.log(ratio,$smallImg.outerWidth(),$bigImg.outerWidth());
				// 设置放大镜样式
				$minzoom.css({width:opt.width*ratio,height:opt.height*ratio});

				
			})

			// 鼠标离开隐藏
			.on('mouseleave',function(){
				$minzoom.hide();
				$big.hide();
			})

			// 鼠标移动
			.on('mousemove',function(e){
				var top = e.pageY - $small.offset().top - $minzoom.outerHeight()/2;
				var left = e.pageX - $small.offset().left-$minzoom.outerWidth()/2;//clientX

				// 防止移出图片区域
				if(left<0){
					left = 0;
				}else if(left > $small.width()-$minzoom.outerWidth()){
					left = $small.width()-$minzoom.outerWidth()
				}

				if(top<0){
					top = 0;
				}else if(top > $small.height()-$minzoom.outerHeight()){
					top = $small.height()-$minzoom.outerHeight()
				}

				// 放大镜移动
				$minzoom.css({
					top:top,
					left:left
				});

				// 大图移动
				$bigImg.css({
					top:-top/ratio,
					left:-left/ratio
				});
			})
		});
	}
})(jQuery);