<?php
	header("Content-Type:text/html;charset=gb2312");

	// 先利用php获取页面内容
	// http://1212.ip138.com/ic.asp
	$content = file_get_contents('http://1212.ip138.com/ic.asp');

	preg_match('/\[(.+)\]/', $content,$res);

	echo $res[1];
?>