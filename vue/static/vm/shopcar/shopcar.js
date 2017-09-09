	require('./shopcar.css')
	require('../../lib/vue-resource')
	 var Vue = require('../../lib/vue')
	var Shopcar = Vue.extend({
		template:'#tpl_car',
		data:function(){
			return {
				show:0
			}
		},
		methods:{
			hide:function(){
				this.show=this.show===0?40:0
			}
		}


	})
	module.exports = Shopcar



