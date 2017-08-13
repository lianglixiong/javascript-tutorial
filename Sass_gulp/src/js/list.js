require(['config'],function(){
	require(['jquery'],function($){
		$.ajax({
			url:'/api/goodslist.php',
			success:function(data){
				console.log(data);
				$('.goods-list').prepend(`<p>${data}</p>`);
			}
		})
	});
});

