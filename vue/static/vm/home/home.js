
	//定义组件类
	require('./home.css')
	require('../../lib/vue-resource')
	 var Vue = require('../../lib/vue')
	var Home = Vue.extend({
		template:'#tpl_home',
		name:"home",
		data:function(){
			return {
				banner_img:[
					{url:'01.jpg'},
					{url:'02.jpg'},
					{url:'03.jpg'},
					{url:'04.jpg'},
					{url:'05.jpg'},
					{url:'06.jpg'},
					{url:'01.jpg'}
				],
				left:0,
				startX:0,
				moveX:0,
				idx:0,
				width:document.documentElement.clientWidth,
				time:0.3,
				timer:'',
				nav:[],
				ad:[],
				lowPrice:[],
				commend:[]

			}
		},
		created:function(){
			//作用域是组件实例化对象
			var me = this;
			this.$http.get('data/home.json').then(function(res){
				if(res&&res.data.errno===0){
					me.nav = res.data.data.nav;
					// console.log(me.nav)
					me.ad = res.data.data.ad;
					me.lowPrice = res.data.data.lowPrice;
					me.commend = res.data.data.commend;
				}
			})
			console.log("首页表首次加载")
		
		},
		mounted:function(){
			var me = this;
			this.timer=setInterval(function(){
				me.idx++;
				me.left=-me.idx*me.width;
				setTimeout(function(){

		  			if(me.idx===6){
						me.idx=0;
						me.time=0
						me.left=-me.idx*me.width
						console.log('idx:'+me.idx)
					}
				},300)
				me.time=0.3
			}, 3000)
		},
		methods:{
			start:function(e){
				clearInterval(this.timer);
				this.startX = e.touches[0].clientX;
				// console.log(this.startX);
				this.time=0;
			},
			move:function(e){
				this.moveX = e.touches[0].clientX-this.startX;
				this.left = -this.idx*this.width+e.touches[0].clientX-this.startX;
				if(this.moveX<0 && this.idx === 6){
					this.idx=0;
				}else if(this.moveX>0&&this.idx===0){
					this.idx=6;
				}
				this.time=0
				
				
			},
			end:function(e){
				if(Math.abs(this.moveX)<this.width/3){
					this.left=-this.idx*this.width
				}else if(this.moveX<0){
					this.idx++;
					this.left=-this.idx*this.width
				}else if(this.moveX){
					this.idx--;
					console.log(this.idx)
					this.left=-this.idx*this.width
				}
				this.moveX=0;
				this.time=0.3;
				// console.log(this.time)
				var me=this;
				this.timer=setInterval(function(){
					me.idx++;
					me.left=-me.idx*me.width;
					setTimeout(function(){

			  			if(me.idx===6){
							me.idx=0;
							me.time=0
							me.left=-me.idx*me.width
							console.log('idx:'+me.idx)
						}
					},300)
					me.time=0.3
				}, 3000)
			},
			
		}
	})
	module.exports = Home;
