<?php
	/*
		1）读取内容
		2）找到对应的数据，并修改点赞数量
		3）重新写入weibo.json
	 */
	
	// 后端如何接收数据
	$id = $_GET['id'];

	$file_url = '../data/weibo.json';

	// 以只读方式打开文件
	$file = fopen($file_url,'r');

	// 读取文件内容
	$content = fread($file, filesize($file_url));

	// 关闭文件
	fclose($file);

	// 把json字符串转成数组
	$datalist = json_decode($content);

	$res;

	// 2）找到对应的数据，并修改点赞数量
	foreach ($datalist as $idx => $item) {

		if($item->id == $id){
			// 把当前数据的点赞数量+1
			$item->likecnt++;

			$res = $item;
		}
	}

	// 以写入方式打开文件
	$file = fopen($file_url,'w');

	// 写入内容
	fwrite($file, json_encode($datalist,JSON_UNESCAPED_UNICODE));

	// 关闭文件
	fclose($file);

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>