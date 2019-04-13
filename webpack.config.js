const path = require('path'); // nodejs的模块
const HTMLWeabpackPligin = require("html-webpack-plugin");//导入模块 这个模块会自动吧出口文件放到打包文件夹中页面的script中,缺陷是每次都会删除之前的html新写入
const CleanWebpackPlugin = require("clean-webpack-plugin");//在每次构建前清理 /dist 文件夹，这样只会生成用到的文件
const webpack = require("webpack");

module.exports = {
    //单入口文件配置
    // entry: "./src/index.js",
    //多入口配置
    entry: {
        // app:"./src/app.js",
        index: './src/index.js',
        test: "./src/test.ts"
    },
    //输出文件 已入口文件名来命名之后打包的文件名 实现多入口多出口
    output: {
        // filename: 'main.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",//开发环境  生产环境是production,这样是未压缩版本
    devtool: 'inline-source-map',//准确定位在未打包之前的文件中的错误位置，而不是在打包之后的文件位置中，仅限在开发环境中使用.注意这个不用额外安装
    devServer: {
        contentBase: "./dist",//配置webpack-dev-server 用来监听dist目录下文件改变 就刷新
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),//在每次构建前清理 /dist 文件夹，这样只会生成用到的文件，以前修改遗留的构建文件就被清理掉了
        new HTMLWeabpackPligin({ "title": "管理输出", template: './src/template/home.html', filename: "./index.html" }),//这里不用配置 就能实现将output里面的文件引入到 dist文件中的html 里  注意一个对象只能 输出一个html
        new HTMLWeabpackPligin({ title: "base页面", filename: "./base.html" }),//第二个输出页面
        new webpack.HotModuleReplacementPlugin()//webpack-dev-server 模块热替换的插件
    ],
    module: {
        rules: [
            {
                //解析css 文件  注意 顺序不能错
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ],
                exclude: "/node_modules/"
            },
            {
                //加载图片文件
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader'],
                exclude: "/node_modules/"
            },
            {
                //加载字体文件
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
                exclude: "/node_modules/"
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader'],
                exclude: "/node_modules/"
            },
            {
                test: /\.xml$/,
                use: ['xml-loader'],
                exclude: "/node_modules/"
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: "/node_modules/",//忽略nodemodule
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/,//忽略nodemodule
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']//这个要有 否则 ts编译会出问题，引入模块的时候不带拓展名，代理ts拓展就没有语法提示 了
    },
}