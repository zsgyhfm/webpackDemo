import _ from'lodash' // 导入lodash模块  这个模块对js的有些方法进行了封装，也实现了些浏览器没有实现的特性
// import"./style.css"// 导入css文件  style-loader css-loader
// import data from"./data.xml" //导入xml 文件 xml-loader
function component() {
    let element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

// webpack默认只转换import和export 其他的es6语法并不转换支持 所以在低版本浏览器使用了其他新特性就无法运行
/**
let component = ()=>{
    let element = document.createElement('div');

    // lodash（目前通过一个 script 引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}
 */

document.body.appendChild(component());
// console.log(data);


