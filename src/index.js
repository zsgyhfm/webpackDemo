import _ from'lodash' // 导入lodash模块
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


