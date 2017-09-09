	var Home = require('../vm/home/home')
	var List = require('../vm/list/list')
	var Detail = require('../vm/detail/detail')
	var Class = require('../vm/class/class')
	var Shopcar = require('../vm/shopcar/shopcar')
	var Login = require('../vm/login/login')
	var Home = require('../vm/home/home')
	var VueRouter=require('../lib/vue-router')
	var routes=[
		{
			path:'/home',
			component:Home
		},
		{
			path:'/list',
			component:List
		},
		{
			path:'/detail/:detailId',
			component:Detail
		},
		{
			path:'/class',
			component:Class
		},
		{
			path:'/shopcar',
			component:Shopcar
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'*',
			redirect:'/home'
		}
	]
	var router = new VueRouter({
		routes:routes
	})
	module.exports = router;