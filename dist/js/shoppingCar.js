define(["jquery","jquery-cookie"],function($){
	function shoppingCar(){
		$(function(){
			sc_car();
			$(".shoppingCar").hover(function() {
				$(this).css("background","#fff");
				$(this).find(".sh").css("color","#b61b21");
				$(this).find(".shoppingCar_sum").css("display","block");
			}, function() {
				$(this).css("background","#b61b21");
				$(this).find(".sh").css("color","#fff");
				$(this).find(".shoppingCar_sum").css("display","none");
			});
			/*颜色按下*/
			var id = null;
			$(".color").find("li").eq(1).css("borderColor","#A00000");
			$(".color").find("li").eq(1).css("borderWidth","2");
			$(".product_right").on("click",".color ul li",function(){
				$(this).closest("ul").find("li").css("borderColor","#666");
				$(this).closest("ul").find("li").css("borderWidth","1");
				$(this).css("borderColor","#A00000");
				$(this).css("borderWidth","2");
				$(this).closest(".product_right").find(".clect").find(".clect_color").html(
					$(this).find("span").html());
				$(".size").find("li").css("borderColor","#666");
				$(".size").find("li").css("borderWidth","1");
				$(".product_right").find(".clect").find(".clect_size").html("");
				id = $(this).attr("id");
			})

			/*购物车添加cookie*/
			/*事件委托*/
			var num = null;
			$(".product_right").on("click",".spend_in .spend_shop",function(){
				$(this).closest(".spend").find(".small_car").css("display","block");
				var first = $.cookie("shop") ==null ? true :false;
				/*第一次添加*/
				if(first){
					$("select option:checked").each(function(){
						num =$(this).html()*1;
						$.cookie("shop",`[{id:${id},num:${num}}]`,{expires:7,raw:true,path:"/"});
					})
				}else{
				/*判断之前是否添加过该商品*/
					var str = eval($.cookie("shop"));
					var isSame = false;
					for(var i = 0;i< str.length;i++){
						if(str[i].id == id){
							$("select option:checked").each(function(){
								str[i].num += $(this).html()*1;
								var cookieStr = JSON.stringify(str);
								$.cookie("shop",cookieStr,{expires:7});
							})
							isSame = true;
							break;
						}
					}
					if(!isSame){
						$("select option:checked").each(function(){
							num =$(this).html()*1;
							var obj = {id:id,num:num};
							str.push(obj);
							var cookieStr = JSON.stringify(str);
							$.cookie("shop",cookieStr,{expires:7});
						})
					}
				}					
				sc_car();
				/*点击购物车按钮加载购物车商品购物车页面*/	
			})
			/*显示购物车数字*/
			function sc_car(){
			var str = $.cookie("shop");
			if(str){
				var arr = eval(str);
				var sum = 0;
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				$(".shoppingCar").find(".sh").find(".numAll").html(sum);
				$(".shoppingCar_sum").find(".numAll").html(sum);
				$(".shoppingCar_sum").find(".priceAll").html(sum*338);
				$(".small_car").find("#shopnum").html(sum);
				$(".small_car").find(".price").html(sum*338);
				}
			}
			/*显示购物车数据*/
			$(".shoppingCar").mouseenter(function(){
				$(".shoppingCar_sum").css("display","block");
				sc_msg();
				$(".shoppingCar_sum").on("click",".remove",function(){
					$.cookie("shop",`[{id:${id},num:${num}}]`,{expires:-1,raw:true,path:"/"});
				})
				sc_car();
			});

			$(".sc_right").mouseleave(function(){
				$(".shoppingCar_sum").css("display","none");
			});
			function sc_msg(){
			$.ajax({
				url: 'data/home.json',
				success: function(res){
					$(".shoppingCar_sum ul").html("");

					//在所有商品信息里面找出，加入购物车的商品信息
					var cookie_arr = eval($.cookie('shop'));
					for(var i = 0; i < cookie_arr.length; i++){
						$(`<li>
							<img src="${res.pro[1].img1}" alt="" />
							<div class  = "div1">
							<span>凡客外套 水柔棉 拉链开衫</span>
							<div class = "price">$123</div>
							</div>
									
							<div class = "remove">删除</div>
						</li>`).appendTo($(".shoppingCar_sum ul"));
					}
				}
				
			})
						
		}
		/*购物车详情*/
		var A = eval($.cookie('shop'));
		var B = 0;
			for(var i = 0; i < A.length; i++){
				B += A[i].num;
			}
		$(".spend_many").find(".numA").html(B);
		$(".spend_many").find(".allSpend").html(B*398);
		var html = `<li class = "pro_con">
		<input class = "sumBtn" type="checkbox" name = "like" checked ="checked"/>
		<img class = "img" src="../images/small_img-1.jpg" alt="">
		<span class = "pro_com">凡客外套 水柔棉 拉链开衫 男款 黑色</span>
		<ol>
			<li>M</li>
			<li>￥398</li>
			<li>
			<button id = "minu">-</button>
			<input class = "in_num" type="text" placeholder="1">
			<button id  = "add">+</button>
			</li>
			<li>-</li>
			<li class = "subtotal"></li>
			<li class = "remove">删除</li>
		</ol>
			</li>`;
		$(".shop_content_pro").html(html);	
		$(".pro_con").find(".in_num").val(B);
		$(".pro_con").find(".subtotal").html(B*398);
		$('.shop_content_pro').on("click",".remove",function(){
			$(this).closest(".shop_content").css("display","none");
			$.cookie("shop",`[{id:${id},num:${num}}]`,{expires:-1,raw:true,path:"/"});
		})
		$(".pro_con").on("click","#minu",function(){
			var num1 = null;
			num1 = $(".in_num").val()*1;
			if(num1 >1){
				$(".in_num").val(num1*1-1);
				$(".spend_many").find(".numA").html(num1*1-1);
				$(".spend_many").find(".allSpend").html((num1*1-1)*398);
				$(".pro_con").find(".subtotal").html((num1*1-1)*398);

			}else{
				$(".in_num").val(0);
				$(".spend_many").find(".numA").html(0);
				$(".spend_many").find(".allSpend").html("0.00");
				$(".pro_con").find(".subtotal").html("0.00");

			}
		})
		$(".pro_con").on("click","#add",function(){
			var num1 = null;
			num1 = $(".in_num").val()*1;
			if(num1 <9){
				$(".in_num").val(num1*1+1);
				$(".spend_many").find(".numA").html(num1*1+1);
				$(".spend_many").find(".allSpend").html((num1*1+1)*398);
				$(".pro_con").find(".subtotal").html((num1*1+1)*398);

			}else{
				$(".in_num").val(9);
				$(".spend_many").find(".numA").html(9);
				$(".spend_many").find(".allSpend").html(9*398);
				$(".pro_con").find(".subtotal").html(9*398);
			}
		})


	})
		
	}
	return{
		shoppingCar:shoppingCar
	}
})