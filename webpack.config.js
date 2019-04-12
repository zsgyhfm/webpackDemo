const path = require('path'); // nodejs的模块
module.exports = {
    //入口文件
    entry:["src/index.js"],
    //输出文件
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    }
}