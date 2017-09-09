
	require('./detail.css')
	require('../../lib/vue-resource')
	 var Vue = require('../../lib/vue')
	var Detail = Vue.extend({
		name:"detail",
		template:'#tpl_detail',
		data:function(){
			return {
				lunbo:[],
				msg:[],
				circle:[],
				choose:[],
				width:document.documentElement.clientWidth,
				moveX:0,
				startX:0,
				endX:0,
				left:0,
				idx:0,
				time:0,
				idxc:0,
				checkIndex:0,
				num:1,

			}
		},
		created:function(){
			var me = this;
			this.$http.get("data/detail.json").then(function(res){
				if(res&&res.data.errno===0){
					me.lunbo=res.data.data.lunbo;
					me.msg = res.data.data.msg;
					me.circle = res.data.data.circle;
					me.choose = res.data.data.choose;
				}
			})
			console.log("详情首次加载")
		},
		methods:{
			start:function(e){
				this.startX = e.touches[0].clientX;
				console.log(this.startX)
				this.time=0
			},
			move:function(e){
				this.moveX = e.touches[0].clientX-this.startX;
				this.left = -this.idx*this.width+this.moveX;
				// console.log(this.left)
					if(this.moveX<0&&this.idx===6){
						this.idx=0;
					}else if(this.moveX>0&&this.idx===0){
						this.idx=6;
					}
			
				
			},
			end:function(){
				this.time=0.3;
				if(Math.abs(this.moveX)<this.width/3){
					
					this.left=-this.idx*this.width
				}else if(this.moveX<0){
					this.idx++;
					
					this.left=-this.idx*this.width
				}else{
					this.idx--;
					this.left=-this.idx*this.width
				}
					this.moveX=0;

				this.idxc=this.idx
				if(this.idxc===6){
					this.idxc=0;
				}
				
			},
			check:function(index){
				this.checkIndex=index;
			},
			reduce:function(){
				this.num--;
				if(this.num<1){
					this.num=1;
				}
			},
			add:function(){
				this.num++;
			}
		}
	})
	module.exports = Detail;
