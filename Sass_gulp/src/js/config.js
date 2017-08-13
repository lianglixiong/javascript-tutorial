require.config({
   	// baseUrl : "js",//

   	// 配置别名
   	// 使用短文件名
    paths : {
    	// 这里的路径也是基于baseURl
		"jquery": "../lib/jquery-3.2.1",

		// jquery插件依赖jQuery
		'gdszoom':'../lib/jquery-gdszoom/jquery.gdszoom'
    },

    shim:{
    	// 给gdszoom添加依赖
    	'gdszoom':['jquery']
    }
});