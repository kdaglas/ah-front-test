const webpack = require('webpack');
const path =require("path");

const HTMLplugin=require("html-webpack-plugin");
const parentDir = path.join(__dirname, "./")

module.exports={
  entry:["./src/index.js"],
  output:{
    path:path.join(parentDir,"dist"),
    filename:"bundle.js"
  },
  resolve:{
    extensions:[".js",".jsx"]
  },
  module:{
    rules:[
      {
        test:/\.(js|jsx)$/,
        exclude:/node_modules/,
        use:{
          loader:"babel-loader"
        }
      },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },{
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        use: {
        loader: 'file-loader'
        , options: {
            name: '../css/fonts/[name]-[hash:8].[ext]'
            }
          }
      },
        {
          test:/\.scss$/,
          loaders:["style-loader","css-loader","sass-loader"]
      }
    ]
  },
  plugins:[
    new HTMLplugin(
      {
        template:"./src/index.html"
      }
    )
  ],
  devServer:{
    contentBase: parentDir,
    historyApiFallback:true
  }
}
