define(["jquery","jquery-cookie"],function($){
	function sign(){
		$(function(){
			$("#testCode").html(testCodeWithStr(5));
			$("#testCode").click(function(){
				$("#testCode").html(testCodeWithStr(5));
			})
			/*提示信息*/
			$(".Vcode").blur(function(){
				var oValue = $(".Vcode").val();
				if(oValue == ""){
					$("#Vcode_span").css("color","#bb2b34");
				}else{
					$("#Vcode_span").css("color","#fff");
				}
			})
			/*手机号*/
			$(".phnum").focus(function(){
				$("#phnum_span").css("color","#d1d1d1");
			})
			$(".phnum").blur(function(){
				var oNum = $(".phnum").val();
				if(oNum == ""){
					$("#phnum_span").css("color","#fff");
				}
				else if(oNum.length == 11){
					$("#phnum_span").css("color","#fff");
				}else{
					$("#phnum_span").css("color","#bb2b34");
				}
			})
			/*手机验证码*/
			$(".phVcode").focus(function(){
				$("#phVcode_span").css("color","#d1d1d1");
			})
			$(".phVcode").blur(function(){
				var oNum = $(".phnum").val();
				var oNum2 = $(".phVcode").val();
				if(oNum2 != ""){
					if(oNum == ""){
						$("#phnum_span").css("color","#bb2b34");
					}else{
						$("#phnum_span").css("color","#fff");
					}
				}else{
					$("#phVcode_span").css("color","#fff");
				}
			})
			/*登录密码*/
			$(".PW").focus(function(){
				$("#PW_span").css("color","#d1d1d1");
			})
			$(".PW").blur(function(){
				var ostr = $(".PW").val();
				if(((ostr + "").length < 6) && ((ostr + "").length > 0)){
					$("#PW_span").css("color","#bb2b34");
					$("#PW_span").html("密码长度必须大于6位，请重新输入");
				}else{
					$("#PW_span").css("color","#fff");
					$("#PW_span").html("6-16位字符，可使用数字、字母或符号的组合");
				}
			})
			/*再次输入密码*/
			$(".APW").focus(function(){
				$("#APW_span").css("color","#d1d1d1");
			})
			$(".APW").blur(function(){
				var oPW = $(".PW").val();
				var oAPW = $(".APW").val();
				if(oPW != oAPW){
					$("#APW_span").css("color","#bb2b34");
					$("#APW_span").html("两次输入不一致，请重新输入");
				}else{
					$("#APW_span").css("color","#fff");
				}
			})
			
			/*验证码*/
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
			$(".content_right").on("click",".sign_in",function(){
				console.log(1);
				var str = `username=${$(".phnum").val()}&password=${$(".PW").val()}&repassword=${$(".APW").val()}`;
				console.log(str);
				$.ajax({
					method: "post",
					url: "js/login.php?type=sign_in",
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
			sign:sign
		}
})
