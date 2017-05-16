var webpack = require('webpack')
var path= require('path')
var HtmlWebpackPlugin= require('html-webpack-plugin')
module.exports ={
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015','react']
            }
        }
    ]
  },
  resolve: {
    extensions: ['','.coffee','.js','.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: 'app/index.html',
      title: '开发模式',
      favicon:'./app/favicon.ico',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash:true,
      // 这样每次客户端页面就会根据这个hash来判断页面是否有必要刷新
      // 在项目后续过程中，经常需要做些改动更新什么的，一但有改动，客户端页面就会自动更新！
      inject: 'body'
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
  }
}
