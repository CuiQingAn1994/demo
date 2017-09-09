	require('./list.css')
	require('../../lib/vue-resource')
	 var Vue = require('../../lib/vue')
	var List=Vue.extend({
		template:'#tpl_list',
		name:'list',
		data:function(){
			return {
				haha:"",
				li_index:0,
				nav:[],
				list:[],
				sort:["升序",'升序','升序',''],
				choose:[],
				wid:false,
				lock:true
			}
		},
		computed:{
			dealList:function(){
				var search = this.haha;
				var result = [];
				for (var i=0;i<this.list.length;i++){
					// console.log(result)
					if(this.list[i].title.indexOf(search)>=0){
						result.push(this.list[i]);
					}
				}
				return result;
			}
		},
		methods:{
			close:function(){
				this.haha="";
			},
			check:function(index,id){
				if(id==="choose"){
					this.wid=true
				}
				console.log(this.wid);
				this.li_index=index;
				var me = this;
				if(me.sort[index]==='升序'){
					this.list.sort(function(a,b){
		
						me.sort[index]='降序'
						return a[id]-b[id]
					})
				}else if(me.sort[index]==='降序'){
						this.list.sort(function(a,b){
		
						me.sort[index]='升序'
						return b[id]-a[id]
					})
				}

			},
			back:function(){
				this.wid=false;
			},
			click:function(msg){
				this.haha=msg;
				this.back();
			}
			

		},
		created:function(){
			console.log("列表首次加载")
			var me = this;
			this.$http.get("data/list.json").then(function(res){
				if(res&&res.data.errno===0){
					me.nav=res.data.data.nav;
					me.list = res.data.data.list;
					me.choose = res.data.data.choose;
				}
			})
		},
		activated:function(){
			var me =this;
			window.onscroll=function(){
				// if(me.lock){
					// me.lock=false
					if(document.body.offsetHeight-window.screen.height-window.scrollY<200){
						console.log(111111111)
						me.$http.get("data/list.json").then(function(res){
							if(res&&res.data.errno===0){
								// me.nav= me.nav.concat(res.data.data.nav);
								me.list =me.list.concat(res.data.data.list);
								// me.choose =me.choose.concat(res.data.data.choose);
							}
						})
					
					}
					// setTimeout(function(){
					// 	me.lock = true;
					// }, 2000)
				// }
			}
			
		},
		deactivated:function(){
			window.onscroll=null;
		}
	})
	module.exports = List;
