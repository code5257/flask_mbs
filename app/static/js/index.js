onload = function(){
	function $(id){
	return document.getElementById(id);
}
	//头部ul部分
	//var ul = $("top-right").getElementsByTagName("ul")[0];
	var ali = $("top-right").getElementsByTagName("li");
	var oimg = $("top-right").getElementsByTagName("img");
//	var oimg2 = document.getElementsByClassName("weibo")[0];
	ali[0].children[0].onmouseenter = ali[1].children[0].onmouseenter = ali[5].children[0].onmouseenter = ali[6].children[0].onmouseenter = function(){
		this.style.color = "red";
	}
	ali[0].children[0].onmouseleave = ali[1].children[0].onmouseleave = ali[5].children[0].onmouseleave = ali[6].children[0].onmouseleave = function(){
		this.style.color = "";
	}
	ali[2].children[0].onmouseenter = oimg[0].onmouseenter = function(){
		oimg[0].style.display = "block";
	}
	ali[2].children[0].onmouseleave = oimg[0].onmouseleave = function(){
		oimg[0].style.display = "none";
	}
	ali[3].children[0].onmouseenter = oimg[1].onmouseenter = function(){
		oimg[1].style.display = "block";
	}
	ali[3].children[0].onmouseleave = oimg[1].onmouseleave = function(){
		oimg[1].style.display = "none";
	}
	ali[4].children[0].onmouseenter = oimg[2].onmouseenter = function(){
		oimg[2].style.display = "block";
	}
	ali[4].children[0].onmouseleave = oimg[2].onmouseleave = function(){
		oimg[2].style.display = "none";
	}
	
	//搜索
	var search_b = document.getElementsByClassName("search-b")[0];
	var ali1 = search_b.getElementsByTagName("li");
	for(var i = 1; i < ali1.length; i++){
		ali1[i].onmouseenter = function(){
			this.children[0].style.color = "#e50163";
		}
		ali1[i].onmouseleave = function(){
			this.children[0].style.color = "";
		}
	}
	
	//导航栏
	var ali2 = $("nav1").getElementsByTagName("li");
	for(var i = 0; i < ali2.length; i++){
		ali2[i].onmouseenter = function(){
			this.children[0].style.color = "#e50163";
			this.children[0].style.borderBottom = "4px solid #e50163";
		}
		ali2[i].onmouseleave = function(){
			this.children[0].style.color = "";
			this.children[0].style.borderBottom = "";
		}
	}
	
	var ali3 = $("nav2").getElementsByTagName("li");
	for(var i = 0; i < ali3.length - 1; i++){
		ali3[i].onmouseenter = function(){
			this.children[0].style.color = "#e50163";
		}
		ali3[i].onmouseleave = function(){
			this.children[0].style.color = "";
		}
	}
	ali3[2].onmouseenter = function(){
		this.children[0].style.color = "white";
	}
	ali3[2].onmouseleave = function(){
		this.children[0].style.color = "#e50163";
	}
	
	

	
	// 左边导航栏
	var ali_list = $("nav-list").getElementsByTagName("li");
	for(var i = 0; i < ali_list.length; i++){
		ali_list[i].onmouseenter = function(){
			this.style.background = "#e50163";
			this.getElementsByClassName("show")[0].style.display = 'block';
		}
		ali_list[i].onmouseleave = function(){
			this.style.background = "";
			this.getElementsByClassName("show")[0].style.display = 'none';
		}
	}


	//品牌推荐
	var ali_tab = $("brank_nav").getElementsByTagName("li");
	for(var i = 0; i < ali_tab.length; i++){
		ali_tab[i].onmouseenter = function(){
			this.className = "on";
		}
		ali_tab[i].onmouseleave = function(){
			this.className = "";
		}
	}
//
// 	//轮播2
// 	var ali3 = $("list3").getElementsByTagName("li");
// 	var ali4 = $("list4").getElementsByTagName("li");
// 	ali3[0].style.opacity = 1;
// //	ali4[0].children[0].style.color = "deeppink";
// 	//自动轮播
// 	var index = 0;
// 	var timer = setInterval(function(){
// 		index++;
// 		move1();
// 	},3000);
// 	function move1(){
// 		if(index >= ali3.length){
// 			index = 0;
// 		}
// 		if(index < 0 ){
// 			index = ali3.length - 1;
// 		}
// 		for (var i=0; i<ali3.length; i++){
// 			if(i==index){
// 				animate(ali3[index],{opacity:100});
// 			}
// 			else {
// 				animate(ali3[i],{opacity:0});
// 			}
// 		}
// 		for(var i = 0; i < ali4.length; i++){
// 			if(i == index){
// 				ali4[i].children[0].className = "diff";
// 			}
// 			else{
// 				ali4[i].children[0].className = "";
// 			}
// 		}
// 	}
// 	for(var i = 0; i < ali4.length; i++){
// 		ali4[i].index = i;
// 		ali4[i].onmouseenter = function(){
// 			index = this.index;
// 			move1();
// 		}
// 	}
// 	$("selection-list-l").onmouseenter = function(){
// 		clearInterval(timer);
// 	}
// 	$("selection-list-l").onmouseleave = function(){
// 		clearInterval(timer);
// 		timer = setInterval(function(){
// 			index++;
// 			move1();
// 		},3000);
// 	}
}


//商品详情用ajax请求
$(function(){
	//先获取所有商品的数据
	// var arr = [];//保存json中所有商品数据
	request_data = {
		'msg':'成功发送请求'
	}
	$.getJSON('../apis/v1/goods/', request_data, function (response) {   // 回调函数
                // 客户端接受到数据之后的处理
		// console.log(111111111)
		var goods = response.datas
		// console.log(response.datas)
		// arr = data;
		for (var i = 0; i < goods.length; i++){
			var obj = goods[i];
			// console.log(obj.img);
			//创建节点
			$that = $('#msb-wo-list ul')
			var dl = $("<li></li>").appendTo($that);
			var dt = $("<a href='#'><img src="+obj.img+"></a>").appendTo(dl);
			// var dd = $("<dd></dd>").appendTo(dt);
			$("<div class='price'><a href='#'><i>"+obj.name+"</i><span>￥"+obj.price+"</span></a></div>").appendTo(dt);
		}
	})
	// //点击商品
	// $("#like-list").on("click","dl",function(){
	// 	var index = $(this).index();
	// 	var obj = arr[index];
	// 	//console.log(obj.id);
	//
	// 	//进入详情页， 且将当前点击的商品的id传入
	// 	location.href = "detail.html?id=" + obj.id;

	
	
	
	//快捷导航
	
	//大于品牌推荐的top值，显示左边快捷导航
	var brankTop = $("#brank").offset().top;
				
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		
		if (scrollTop >= brankTop){
			$("#leftside").fadeIn();
		}
		else {
			$("#leftside").fadeOut();
		}
	})
	
	
	//表示是否点击了楼层按钮正在执行动画
	var isMoving = false;
	
	//点击楼层按钮， 让页面滚动到对应的楼层
	$("#left-nav li").click(function(){
		$(this).find(".second-pic").addClass("second-show").parent().parent().siblings().find(".second-pic").removeClass("second-show");
		var index = $(this).index();
		var top = $(".floor").eq(index).offset().top;
		
		isMoving = true;
		$("html,body").stop(true).animate({scrollTop: top}, function(){
			isMoving = false;
		});
		
	})
	
	//滚动页面
	$(window).scroll(function(){
		
		//如果没有点击楼层按钮执行动画， 则执行代码
		if (!isMoving) {			
			var scrollTop = $(window).scrollTop();
						
			//遍历所有的楼层div
			var index = 0;
			$(".floor").each(function(){
				//每个楼层div的top值
				var top = $(this).offset().top;
				
				var winH = $(window).height(); //页面高度
				
				if ( scrollTop + winH/2 >= top) {
					index = $(this).index(".floor");				
				}
			})
			//console.log(index);
			$("#left-nav li").eq(index).find(".second-pic").addClass("second-show").parent().parent().siblings().find(".second-pic").removeClass("second-show");
		}
		
	})
	
	//点击返回回到顶部
	$("#backtop").click(function(){
	   $(window).scrollTop(0);
		
	})

	// $.getJSON('/apis/v1/wheel/', request_data, function (response) {   // 回调函数
	// 	// 客户端接受到数据之后的处理
	// 	console.log(12222)
	// 	console.log(response.datas)
	// 	var imgs = response.datas
	// 	// console.log(response.datas)
	// 	// // arr = data;
	// 	for (var i = 0; i < imgs.length; i++){
	// 		var img = imgs[i];
	// 		console.log(img.img);
	// 		//创建节点
	//
	// 		$that = $('#banner #list li')
	// 		$("<a href='#'><img src="+img.img+"></a>").appendTo($that);
	// 	}
	// })

	// 每1秒执行
	var i = 0
	setInterval(function () {
    	// 	//do something...
			$.getJSON('/apis/v1/wheel_re/', request_data, function (response) {   // 回调函数

				var imgs = response.datas

				var img = imgs[i];

				$that = $('#banner #list img' )

				$that.eq(0).attr('src',img.img1)
				$that.eq(1).attr('src',img.img2)
				$that.eq(2).attr('src',img.img3)
				$that.eq(3).attr('src',img.img4)
				i += 1
				console.log(imgs.length)
				if (i >= imgs.length){
					i = 0;
				}
			})
	}, 2500);

})
