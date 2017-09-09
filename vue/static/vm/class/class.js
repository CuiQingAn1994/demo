
	require('./class.css')
	require('../../lib/vue-resource')
	 var Vue = require('../../lib/vue')

	var Class = Vue.extend({
		template:"#tpl_class",
		data:function(){
			return {
				cla:[],
				show:0
			}
		},
		created:function(){
			var me = this;
			this.$http.get("data/class.json").then(function(res){
				if(res.data.errno===0&&res){
					me.cla = res.data.data.cla 
				}
			})
		},
		methods:{
			hide:function(){
				this.show=this.show===0?40:0
			}

		}
	})
	module.exports = Class
