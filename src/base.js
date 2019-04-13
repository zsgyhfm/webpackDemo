import "@babel/polyfill" //导入这个框架 可以使用es6的新特性api
let tag=()=>console.log('click');
console.log(...[1,2,3,4]);
//新特性 生成器
function *nums(){
    for (const key in [1,2,3,4,5]) {
       yield key
    }
    return "end"
}
let aa = nums();
let flag = true;
while (flag){
    let b =aa.next()
    if (!b.done){
        console.log(b);
    }else{
        console.log(b)
        flag=false;
    }
}

export default tag;
export const {name,age} = {name:"zaks",age:123}
