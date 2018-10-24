define(["jquery","jquery-cookie"],function($){
	function subMenu(){
		/*衬衫*/
		$(function(){
			$(`<div id = "subMenu1" class = "Menu_list">
				<ol>
				<li><a href="">免烫</a></li>
				<li><a href="">易打理</a></li>
				<li><a href="">休闲</a></li>
				<li><a href="">高支</a></li>
				<li><a href="">法兰绒</a></li>
				<li><a href="">牛津纺</a></li>
				<li><a href="">青年布</a></li>
				<li><a href="">牛仔</a></li>
				<li><a href="">麻</a></li>
				<li><a href="">水洗棉</a></li>
				<li><a href="">泡泡纱</a></li>
				</ol>
				</div>`).appendTo('.menu1');
			$(".menu1").hover(function(){
				$("#subMenu1").animate({height:"310px"},200,"linear");
				$("#subMenu1").css("display","block");
				$("#subMenu1").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu1").animate({height:"0px"},200,"linear");
				$("#subMenu1").css("border","none");
			})
		})
		/*T恤*/
		$(function(){
				$(`<div id = "subMenu2" class = "Menu_list">
				<ol>
				<li><a href="details.html" target="_blank">水柔棉</a></li>
				<li><a href="">长袖体恤</a></li>
				<li><a href="">熊本熊</a></li>
				<li><a href="">全棉冰霜</a></li>
				<li><a href="">POLO衫</a></li>
				<li><a href="">字</a></li>
				<li><a href="">复刻系列</a></li>
				<li><a href="">山鸟叔</a></li>
				<li><a href="">小宇宙</li>
				<li><a href="">电影台词</a></li>
				<li><a href="">科学怪人</a></li>
				<li><a href="">运动T恤</a></li>
				<li><a href="">花花公子</a></li>
				</ol>
				</div>`).appendTo('.menu2');
			$(".menu2").hover(function(){
				$("#subMenu2").animate({height:"366px"},200,"linear");
				$("#subMenu2").css("display","block");
				$("#subMenu2").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu2").animate({height:"0px"},200,"linear");
				$("#subMenu2").css("border","none");
			})
		})
		/*卫衣*/
		$(function(){
				$(`<div id = "subMenu3" class = "Menu_list">
				<ol>
				<li><a href="">熊本熊</a></li>
				<li><a href="">开衫</a></li>
				<li><a href="">连帽</a></li>
				<li><a href="">圆领</a></li>
				<li><a href="">水柔棉</a></li>
				</ol>
				</div>`).appendTo('.menu3');
			$(".menu3").hover(function(){
				$("#subMenu3").animate({height:"142px"},200,"linear");
				$("#subMenu3").css("display","block");
				$("#subMenu3").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu3").animate({height:"0px"},200,"linear");
				$("#subMenu3").css("border","none");
			})
		})
		/*外套*/
		$(function(){
				$(`<div id = "subMenu4" class = "Menu_list">
				<ol>
				<li><a href="">运动户外</a></li>
				<li><a href="">皮肤衣</a></li>
				<li><a href="">西服</a></li>
				<li><a href="">C9设计款</a></li>
				<li><a href="">夹克</a></li>
				<li><a href="">nautilus</a></li>
				<li><a href="">大衣</a></li>
				<li><a href="">羽绒服</a></li>
				</ol>
				</div>`).appendTo('.menu4');
			$(".menu4").hover(function(){
				$("#subMenu4").animate({height:"226px"},200,"linear");
				$("#subMenu4").css("display","block");
				$("#subMenu4").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu4").animate({height:"0px"},200,"linear");
				$("#subMenu4").css("border","none");
			})
		})
		/*针织衫*/
		$(function(){
				$(`<div id = "subMenu5" class = "Menu_list">
				<ol>
				<li><a href="">空调衫</a></li>
				<li><a href="">棉线衫</a></li>
				<li><a href="">羊毛衫</a></li>
				</ol>
				</div>`).appendTo('.menu5');
			$(".menu5").hover(function(){
				$("#subMenu5").animate({height:"86px"},200,"linear");
				$("#subMenu5").css("display","block");
				$("#subMenu5").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu5").animate({height:"0px"},200,"linear");
				$("#subMenu5").css("border","none");
			})
		})
		/*裤装*/
		$(function(){
				$(`<div id = "subMenu6" class = "Menu_list">
				<ol>
				<li><a href="">沙滩裤</a></li>
				<li><a href="">针织裤</a></li>
				<li><a href="">休闲裤</a></li>
				<li><a href="">牛仔裤</a></li>
				<li><a href="">运动裤</a></li>
				</ol>
				</div>`).appendTo('.menu6');
			$(".menu6").hover(function(){
				$("#subMenu6").animate({height:"142px"},200,"linear");
				$("#subMenu6").css("display","block");
				$("#subMenu6").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu6").animate({height:"0px"},200,"linear");
				$("#subMenu6").css("border","none");
			})
		})
		/*鞋*/
		$(function(){
				$(`<div id = "subMenu7" class = "Menu_list">
				<ol>
				<li><a href="">复古跑鞋</a></li>
				<li><a href="">帆布鞋</a></li>
				<li><a href="">休闲鞋</a></li>
				</ol>
				</div>`).appendTo('.menu7');
			$(".menu7").hover(function(){
				$("#subMenu7").animate({height:"86px"},200,"linear");
				$("#subMenu7").css("display","block");
				$("#subMenu7").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu7").animate({height:"0px"},200,"linear");
				$("#subMenu7").css("border","none");
			})
		})
		/*家具配饰*/
		$(function(){
				$(`<div id = "subMenu8" class = "Menu_list">
				<ol>
				<li><a href="">床品套件</a></li>
				<li><a href="">被子</a></li>
				<li><a href="">枕</a></li>
				<li><a href="">家居服</a></li>
				<li><a href="">家居鞋</a></li>
				<li><a href="">背提包</a></li>
				<li><a href="">拉杆箱</a></li>
				<li><a href="">皮带钱包</a></li>
				<li><a href="">帽子</li>
				<li><a href="">眼镜</a></li>
				<li><a href="">毛巾</a></li>
				</ol>
				</div>`).appendTo('.menu8');
			$(".menu8").hover(function(){
				$("#subMenu8").animate({height:"310px"},200,"linear");
				$("#subMenu8").css("display","block");
				$("#subMenu8").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu8").animate({height:"0px"},200,"linear");
				$("#subMenu8").css("border","none");
			})
		})
		/*内衣袜品*/
		$(function(){
				$(`<div id = "subMenu9" class = "Menu_list">
				<ol>
				<li><a href="">船袜</a></li>
				<li><a href="">中筒袜</a></li>
				<li><a href="">连裤袜</a></li>
				<li><a href="">内衣裤</a></li>
				<li><a href="">围巾披肩</a></li>
				<li><a href="">童装</a></li>
				</ol>
				</div>`).appendTo('.menu9');
			$(".menu9").hover(function(){
				$("#subMenu9").animate({height:"170px"},200,"linear");
				$("#subMenu9").css("display","block");
				$("#subMenu9").css("border-top","4px solid #b81c22");
			},function(){
				$("#subMenu9").animate({height:"0px"},200,"linear");
				$("#subMenu9").css("border","none");
			})
		})
	}
	return{
		subMenu:subMenu
	}
})