define(["jquery","jquery-cookie"],function($){
	function detail_of_goods(){
		$(function(){
			$.ajax({
				url:'data/home.json',
				type:"get",
				success:function(res){
					var html = "";
					var html2 = "";
					var html3 = "";
					for(var i = 0; i <res.pro.length; i++){
						html +=`<ul class = "${res.pro[i].id} id = "${res.pro[i].id}" style = "display:none">
						<li class = "li">
							<img class = "img1" src="${res.pro[i].img1}" alt="" />
							<div class = "div1"><img src="${res.pro[i].img11}" alt="" />
								<div class = "smB"></div>
							</div>
							<div class = "div2">
								<img src="${res.pro[i].img11}" alt="" />
							</div>
						</li>
						<li class = "li">
							<img class = "img1" src="${res.pro[i].img2}" alt="" />
							<div class = "div1"><img src="${res.pro[i].img21}" alt="" />
								<div class = "smB"></div>
							</div>
							<div class = "div2">
								<img src="${res.pro[i].img21}" alt="" />
							</div>
						</li>
						<li class = "li">
							<img class = "img1" src="${res.pro[i].img3}" alt="" />
							<div class = "div1"><img src="${res.pro[i].img31}" alt="" />
								<div class = "smB"></div>
							</div>
							<div class = "div2">
								<img src="${res.pro[i].img31}" alt="" />
							</div>
						</li>
						</ul>
						`;
					}
					$(".product_left ").html(html);
					for(var i = 0;i <res.pck.length; i++){
						html2 += `<img src="${res.pck[i].img}" alt="" />`;
					}$(".pck").html(html2);
					for(var i = 0;i <res.pro.length;i++){
						html3 +=`<li id = "${res.pro[i].id}">
								<div>
									<div><img src="${res.pro[i].img1}" alt="" /></div>
									<span>${res.pro[i].color}</span>
								</div>
							</li>`
					}$(".product_right .color ul").html(html3);
					/*默认图片*/
					$(".pro").find(".2").css("display","block");
					$(".pro").find(".2").find(".li").eq(0).css({
						borderColor:"#b81c22",
						borderWidth:"2px"
					});
					/*选择更换图片*/
					$(".pro").find(".2").find("li").eq(0).find('.div1').css("zIndex","2");
				$(".li").on("mouseenter",function(){
					$(this).closest('ul').find(".li").css("borderColor","#aaa");
					$(this).closest("ul").find(".li").css("borderWidth","1px");
					$(this).css("borderColor","#b81c22");
					$(this).css("borderWidth","2px");
					$(this).closest("ul").find(".div1").css("zIndex","1");
					$(this).find(".div1").css("zIndex","6");
			})
				$(".li").on("mouseleave",".img1",function(){
					$(this).next().css("zIndex","5");
				})
			/*划入出现大图*/
			var offsetX = 0;
			var offsetY = 0;
			$(".li").on("mouseenter",".div1",function(ev){
				$(this).next().css("display","block");
				$(this).find(".smB").css("display","block");
				offsetX = ev.pageX-180;
				offsetY = ev.pageY-300; 
				if(offsetX > 200){
					if(offsetY > 200){
						$(this).find(".smB").css({
							left:200,
							top:200
						})
						$(this).next().find("img").css({
							left:-400,
							top:-400
						})
					}else{
						$(this).find(".smB").css({
							left:200,
							top:offsetY
						})
						$(this).next().find("img").css({
							left:-400,
							top:-offsetY*2
						})
					}
				}else{
					if(offsetY > 200){
						$(this).find(".smB").css({
							left:offsetX,
							top:200
						})
						$(this).next().find("img").css({
							left:-offsetX*2,
							top:-400
						})
					}else{
						$(this).find(".smB").css({
							left : offsetX,
							top : offsetY
						})
						$(this).next().find("img").css({
							left :-offsetX*2,
							top:-offsetY*2
						})
					}
				}
			})
			$(".li").on("mouseleave",".div1",function(){
				$(this).next().css("display","none");
				$(this).find(".smB").css("display","none");
			})
			/*图标的移动*/
			$(document).mousemove(function(ev){
				offsetX = ev.pageX - 280;
				offsetY = ev.pageY - 400; 	
				$(".smB").css({
					left : offsetX,
					top : offsetY
				})
				$(".div2").find("img").css({
					left:-offsetX*2,
					top:-offsetY*2
				})
				if( offsetX <= 0){
					$(".smB").css({
						left : 0
					})
					$(".div2").find("img").css({
						left:0
					})
				}
				if( offsetX >= 200){
					$(".smB").css({
						left :200
					})
					$(".div2").find("img").css({
						left:-400
					})	
				}
				if( offsetY <= 0){
					$(".smB").css({
						top :0
					})
					$(".div2").find("img").css({
						top:0
					})
				}
				if( offsetY >= 200){
					$(".smB").css({
						top :200
					})
					$(".div2").find("img").css({
						top:-400
					})
				}
			})

			/*颜色按下左边的图片切换*/
			$(".color").find("li").eq(0).click(function(){
				$(".product_left").find("ul").css("display","none");
				$(".product_left").find(".1").css("display","block");
				/*默认图片*/
				$(".pro").find(".1").css("display","block");
				$(".pro").find(".1").find(".li").eq(0).css({
					borderColor:"#b81c22",
					borderWidth:"2px"
				});
				$(".pro").find(".1").find("li").eq(0).find('.div1').css("zIndex","2");
			})
			$(".color").find("li").eq(1).click(function(){
				$(".product_left").find("ul").css("display","none");
				$(".product_left").find(".2").css("display","block");
				/*默认图片*/
				$(".pro").find(".2").css("display","block");
				$(".pro").find(".2").find(".li").eq(0).css({
					borderColor:"#b81c22",
					borderWidth:"2px"
				});
				$(".pro").find(".2").find("li").eq(0).find('.div1').css("zIndex","2");
			})
			$(".color").find("li").eq(2).click(function(){
				$(".product_left").find("ul").css("display","none");
				$(".product_left").find(".3").css("display","block");
				/*默认图片*/
				$(".pro").find(".3").css("display","block");
				$(".pro").find(".3").find(".li").eq(0).css({
					borderColor:"#b81c22",
					borderWidth:"2px"
				});
				$(".pro").find(".3").find("li").eq(0).find('.div1').css("zIndex","2");
			})
			/*尺码按下*/
			$(".product_right").on("click",".size ul li",function(){
				$(this).closest("ul").find("li").css("borderColor","#666");
				$(this).closest("ul").find("li").css("borderWidth","1");
				$(this).css("borderColor","#A00000");
				$(this).css("borderWidth","2");
				$(this).closest(".product_right").find(".clect").find(".clect_size").html(
					$(this).html());
			})
				},
				error:function(msg){
					alert(msg);
				}
			})
			/*小购物车*/
			$(".product_right").on("click","button",function(){
				$(this).closest(".spend").find(".small_car").css("display","none");
			})
			$(".product_right").on("click",".ret",function(){
				$(this).closest(".spend").find(".small_car").css("display","none");
				return false;
			})
			/*导航按下*/
			$(".content_nav").on("click","ul li a",function(){
				$(this).closest("ul").find("a").css("color","#000");
				$(this).css("color","#A00000");
			})
			/*导航移动*/
			$(document).scroll(function(){
				var scrollTop = $(document).scrollTop();
				if(scrollTop >= 700){
				$(".scroll_nav").css("display","block");
					if((scrollTop >= 800)&&(scrollTop < 6350)){
						$(".nav_1").css("color","#A00000");
					}else{
						$(".nav_1").css("color","#000");
					}
					if((scrollTop >= 6350)&&(scrollTop < 6800)){
						$(".nav_2").css("color","#A00000");
					}else{
						$(".nav_2").css("color","#000");
					}
					if((scrollTop >= 6800)&&(scrollTop < 7600)){
						$(".nav_3").css("color","#A00000");
					}else{
						$(".nav_3").css("color","#000");
					}
					if((scrollTop >= 7600)&&(scrollTop < 8600)){
						$(".nav_4").css("color","#A00000");
					}else{
						$(".nav_4").css("color","#000");
					}
					if((scrollTop >= 8600)&&(scrollTop < 8900)){
						$(".nav_5").css("color","#A00000");
					}else{
						$(".nav_5").css("color","#000");
					}
				}else{
					$(".scroll_nav").css("display","none");
				}

			})
		})
	}
	return{
			detail_of_goods:detail_of_goods
		}
})
