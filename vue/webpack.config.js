// 引入优化插件
var webpack = require('webpack');
// 引入压缩js的插件
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	entry:{
		pack:'./static/index.js'
	},
	output:{
		filename:'./pack/pack.js'
	},
	module:{
		loaders:[
			{

				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	},
	plugins: [
		new UglifyJsPlugin()
	]
}