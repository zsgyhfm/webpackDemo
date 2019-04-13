const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:path.join(__dirname,"dist")
    },
    plugins:[
        new HTMLWebpackPlugin(),
        new CleanWebpackPlugin(['dist'])
    ]
}