const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HTMLWebpackPlugin = require('html-webpack-plugin')
//如果使用了optimization 选项 会覆盖webpack默认的css和js的压缩配置所以这里要将js和css的一同配置
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        //这里不用配置 就能实现将output里面的文件引入到 dist文件中的html 里  注意一个对象只能 输出一个html
        new HTMLWebpackPlugin({
            "title": "管理输出",
            //template: './src/template/home.html',
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
        }]
    }
})