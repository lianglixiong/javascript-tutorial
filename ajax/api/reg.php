<?php
	/*
		判断用户是否被注册
		已经存在的名字：’张三’,’李四’,’王尼玛’,’奥巴马’
	 */
	
	// $username = isset($_GET['username'])?$_GET['username']:'';

	$username = $_POST['username'];

	$arr = array('张三','李四','王尼玛','奥巴马');

	// 判断用户名是否存在数组中
	$res = in_array($username, $arr);

	if($res){
		echo 'no';
	}else{
		echo "yes";
	}
	
?>