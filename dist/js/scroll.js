define(["jquery","jquery-cookie"],function($){
	function scroll(){
		$(function(){
			var oBtns = $("#scroll").find("ol").find("li");
			var oUl = $("#scroll").find("ul");
			var aLis = oUl.find("li");
			var iNow = 0;
			var timer =null;
			oBtns.hover(function(){
				iNow = $(this).index();
				aLis.css("z-index","1");
				oBtns.css("bacground","#ddd");
				oBtns.eq(iNow).css("background","red");
				aLis.eq(iNow).css("z-index","2");
				aLis.eq(iNow).fadeIn(600);
								oBtns.eq(iNow).siblings("li").css("background","#ddd");

			},function(){
				aLis.eq(iNow).siblings("li").css("display","none");
			})
			/*滚动*/
			timer = setInterval(function(){
				iNow++;
				if(iNow == aLis.size()){
					iNow =0;
					aLis.css("z-index","1");
				}
				aLis.css("z-index","1");
				aLis.eq(iNow).css("z-index","2");
				oBtns.css("background","#ddd");
				oBtns.eq(iNow).css("background","red");
				aLis.eq(iNow).fadeIn(600);
				aLis.eq(iNow).siblings("li").css("display","none");
			},4000);
			/*鼠标移入移出*/
			$(".scroll").hover(function(){
				clearInterval(timer);
			},function(){
				timer = setInterval(function(){
					iNow++;
					if(iNow == aLis.size()){
						iNow =0;
						aLis.css("z-index","1");
					}
					aLis.eq(iNow).css("z-index","2");
					oBtns.css("background","#ddd");
					oBtns.eq(iNow).css("background","red");
					aLis.eq(iNow).fadeIn(600);
					aLis.eq(iNow).siblings("li").css("display","none");
				},4000);
			})
		})
	}
	return{
		scroll:scroll
	}
})