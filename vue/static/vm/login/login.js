	require('./login.css')
	require('../../lib/vue-resource')
	 var Vue = require('../../lib/vue')
	var Login = Vue.extend({
		template:"#tpl_login",
		data:function(){
			return {
				login:[
					{title:"快捷登录"},
					{title:"普通登录"}
				],
				idx:0,
				check:'',
				phone:'',
				email:'',
				show:0,
				msg:'获取动态密码'
			}
		},
		methods:{
			choose:function(index){
				this.idx=index;
				
			},
			checkPhone:function(){
				console.log(this.phone)
				if(this.phone){
					if(!/^1[0-9]{10}$/.test(this.phone)){
						this.check="手机号格式不对"
					}else{
						this.check=""
					}
					console.log(this.check)
					
				}
			},
			hide:function(){
				this.show=this.show===0?40:0
			},
			psd:function(){
				this.msg=6;
				var me = this;
				var timer=setInterval(function(){
					me.msg--;
					if(me.msg<0){
						me.msg="点击重试";
						clearInterval(timer)
					}
				},1000)

			}

		}
	})
	module.exports = Login
