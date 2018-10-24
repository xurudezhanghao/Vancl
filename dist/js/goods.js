console.log("加载完成");
/*需要加入的模块*/
require.config({
	paths:{
		"jquery":"jquery-1.11.3",
		"jquery-cookie":"jquery.cookie",
		"subMenu":"subMenu",
		"detail_of_goods":"detail_of_goods",
		"shoppingCar":"shoppingCar"

	},
	shim:{
		"jquery-cookie":["jquery"],

	}
})
require(['subMenu','detail_of_goods','shoppingCar'],function(subMenu,detail_of_goods,shoppingCar){
	subMenu.subMenu();
	detail_of_goods.detail_of_goods();
	shoppingCar.shoppingCar();
})
