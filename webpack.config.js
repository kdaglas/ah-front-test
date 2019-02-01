const path =require("path");
const HTMLplugin=require("html-webpack-plugin");

module.exports={
  entry:["babel-polyfill","./src/index.js"],
  output:{
    path:path.resolve(__dirname,"dist"),
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
      }
    ]
  },
  plugins:[
    new HTMLplugin(
      {
        template:"./src/index.html",
        filename:"./index.html"
      }
    )
  ]
}
