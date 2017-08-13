<?php
	$ip = isset($_GET['ip']) ? $_GET['ip'] : '';

	$res = file_get_contents('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip='.$ip);

	echo $res;
?>