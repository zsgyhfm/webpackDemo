const path = require('path'); // nodejs的模块
module.exports = {
    //入口文件
    entry: ["./src/index.js"],
    //输出文件
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
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