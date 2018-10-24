define(["jquery","jquery-cookie"],function($){
	function login(){
		$(function(){
			$("#pLogin").click(function(){
				$(".login").css("display","block");
				$("#pLogin").attr("class","on");
				$("#qLogin").attr("class","");
				$(".quickLogin").css("display","none");
			})
			$("#qLogin").click(function(){
				$(".login").css("display","none");
				$("#pLogin").attr("class","");
				$("#qLogin").attr("class","on");
				$(".quickLogin").css("display","block");
			})
			$("#p3").click(function(){
				$("#testCode").html(testCodeWithStr(5));	
			})
			$("#testCode").html(testCodeWithStr(5));
			function testCodeWithStr(n){
				var arr = [];
				for(var i =0 ;i< n;i++){
					var num =parseInt(Math.random()*100);
					if(num >= 0 && num<= 9){
						arr.push(num);
					}else if(num >=17 && num <=42){
						var str =String.fromCharCode(num +80);
						arr.push(str);
					}else if(num >=65 && num <=90){
						var str = String.fromCharCode(num);
						arr.push(str);
					}else{
						i--;
					}
				}
				return arr.join("");
			}
			$(".content_right").on("click",".LO",function(){
				console.log(1);
				var str = `username=${$(".username").val()}&password=${$(".password").val()}`;
				console.log(str);
					$.ajax({
						method: "post",
						url: "js/login.php?type=LO",
						data: str, 
						success: function(data){
							alert(data);
						},
						error: function(msg){
							alert(msg);
						}
					})
			})
		})
	}
	return{
			login:login
		}
})
