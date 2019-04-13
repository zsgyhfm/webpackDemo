const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new HTMLWebpackPlugin(),
        new CleanWebpackPlugin(['dist'])
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
    }
}
