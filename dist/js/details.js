define(["jquery","jquery-cookie"],function($){
	function details(){
		$(function(){
			$.ajax({
				url:'data/home.json',
				type:"get",
				success:function(res){
					var html = "";
					for(var i = 0; i <res.details.length; i++){
						html +=`<li class = "li" id = "$(res.details[i].id)"">
						<div class = "tehui">特惠<span>${res.details[i].newprice}</span></div>
						<a href="" title = "${res.details[i].title}"><img id = "img" src="${res.details[i].img}" alt="" /></a>
						<a href="" title = "${res.details[i].title}">${res.details[i].title}</a>
						<p>售价￥<span>${res.details[i].oldprice}</span></p>
						<div class = "big">
							<img src="${res.details[i].img}" alt="" />
							<a href="" title = "${res.details[i].title}">${res.details[i].title}</a>
							<p>产品编号：6375774</p>
							<p>售价￥<span>${res.details[i].oldprice}</span></p>
							<div> 
								好评率<span>98%</span>
							</div>
						</div>
					</li>`;
					}
					
					$(".product ul").html(html);
				},
				error:function(msg){
					alert(msg);
				}
			})
			$(".price").hover(function(){
				$(".price").css("background","#fff");
				$(".priceSub").css("display","block");
			},function(){
				$(".price").css("background","#eee");
				$(".priceSub").css("display","none");
			})
			$(".priceSub").hover(function(){
				$(".price").css("background","#eee");
			},function(){
				$(".price").css("background","#fff");
			})
			$(".product").on("mouseenter","ul li a #img",function(){
				$(this).closest('.li').find('.big').css("display","block");
			})
			$(".product").on("mouseleave","ul li a #img",function(){
				$(".big").css("display","none");
			})
		})
	}
	return{
			details:details
		}
})
