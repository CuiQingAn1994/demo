	var router = require('./router/router')
	var Vue = require('./lib/vue')
	var vueRouter = require('./lib/vue-router')
	var vueResource = require('./lib/vue-resource')
	require('./reset.css')
	Vue.use(vueRouter)
	Vue.use(vueResource)
	var app = new Vue({
		el:'#app',
		router:router
	})
	module.exports = app;
