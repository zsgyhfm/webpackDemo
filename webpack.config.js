const path = require('path'); // nodejs的模块
const HTMLWeabpackPligin = require("html-webpack-plugin");//导入模块 这个模块会自动吧出口文件放到打包文件夹中页面的script中
const CleanWebpackPlugin = require("clean-webpack-plugin");//在每次构建前清理 /dist 文件夹，这样只会生成用到的文件
module.exports = {
    //单入口文件配置
    // entry: "./src/index.js",
    //多入口配置
    entry:{
        app:"./src/app.js",
        index:'./src/index.js',
        base:'./src/base.js'
    },
    //输出文件 已入口文件名来命名之后打包的文件名 实现多入口多出口
    output: {
        // filename: 'main.js',
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    plugins:[
        new CleanWebpackPlugin(),//在每次构建前清理 /dist 文件夹，这样只会生成用到的文件，以前修改遗留的构建文件就被清理掉了
        new HTMLWeabpackPligin({"title":"管理输出"})//这里不用配置 就能实现将output里面的文件引入到 dist文件中的html 里
    ],
    module: {
        rules: [
            {
                //解析css 文件  注意 顺序不能错
                test: /\.css$/,
                use: [
                    'style-loader','css-loader'
                ]
            },
            {
                //加载图片文件
                test:/\.(png|jpg|gif)$/,
                use:['file-loader']
            },
            {
                //加载字体文件
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            },
            {
                test:/\.(csv|tsv)$/,
                use:['csv-loader']
            },
            {
                test:/\.xml$/,
                use:['xml-loader']
            }
        ]
    }
}