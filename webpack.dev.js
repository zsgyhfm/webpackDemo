const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,{
    mode:'development',
    devtool:"inline-source-map",
    devServer:{
        contentBase:'./dist'
    },
    module:{
        rules:[
             {
                //解析css 文件  注意 顺序不能错
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ],
                exclude: "/node_modules/"
            },
        ]
    }
})