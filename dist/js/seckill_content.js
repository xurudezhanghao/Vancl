define(["jquery","jquery-cookie"],function($){
	function seckill_content(){
		$(function(){
			$.ajax({
				url:'data/home.json',
				type:"get",
				success:function(res){
					var html = "";
					for(var i = 0; i <res.obj.length; i++){
						html +=`<li>
					<a href="">
					<img src="${res.obj[i].img}" alt="" />
					<span class = "title" >${res.obj[i].title}</span>
					<span class = "oldPrice">${res.obj[i].oldPrice}</span>
					<span class = "newPrice" >
					<em>${res.obj[i].newPrice1}</em>
					<span>
						充值后
						<em>${res.obj[i].newPrice2}</em>
						元
					</span>
					</span>
					</a>
					</li>`;
					}
						$(".seckill_content ul").html(html);
					var html2 = "";
					for(var i = 0; i <res.sy.length; i++){
						html2 +=`<li><a href="detail_of_goods.html" target = "_blank"><img src="${res.sy[i].img}" alt="" /></a></li>`;
					}
						$(".sy ul").html(html2);
					var html3 = "";
					for(var i = 0; i <res.jecket.length; i++){
						html3 +=`<li><a href="">
						<img src="${res.jecket[i].img1}" alt="" /></a>
						<div><span class = "title">${res.jecket[i].title1}</span><span class = "dd">充值购买更优惠</span></div>
					</li>
					<li>
						<div class = "div">
							<a href=""><img src="${res.jecket[i].img2}" alt="" /></a>
							<div><span class = "title">${res.jecket[i].title2}</span><span class = "dd">充值购买更优惠</span></div>
						</div>
						<div>
							<a href=""><img src="${res.jecket[i].img3}" alt="" /></a>
							<div><span class = "title">${res.jecket[i].title3}</span><span class = "dd">充值购买更优惠</span></div>
						</div>
					</li>
					<li>
						<a href=""><img src="${res.jecket[i].img4}" alt="" /></a>
						<div><span class = "title">${res.jecket[i].title4}</span><span class = "dd">充值购买更优惠</span></div>
					</li>`;
						}
					$(".jecket ul").html(html3);
					var html4 = "";
					for(var i = 0; i <res.pans.length; i++){
						html4 +=`<li>
						<a href=""><img src="${res.pans[i].img}" alt="" /></a>
						<div><span class= "title">${res.pans[i].title}</span><span class = "dd">充值购买相当于 <em>${res.pans[i].price}元起</em></span></div>
					</li>`;
					}
					$(".pans ul").html(html4);
					var html5 = "";
					for(var i = 0; i <res.more.length; i++){
						html5 +=`<li>
						<a href=""><img src="${res.more[i].img}" alt="" /></a>
					</li>`;
					}
					$(".more ul").html(html5);

				},
				error:function(msg){
					alert(msg);
				}
			})
		})
	}
	return{
			seckill_content:seckill_content
		}
})
