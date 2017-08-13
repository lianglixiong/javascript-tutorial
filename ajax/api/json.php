<?php
	//接口
	//返回json字符串

	$goodslist = array();

	for($i=0;$i<20;$i++){
		$goods = array(
			'id'=>'g'.$i,
			'title'=>'商品'.$i,
			'img'=>'img/'.$i.'.jpg',
			'price'=>rand(998,1998)
		);

		$goodslist[] = $goods;
	}

	echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);

?>