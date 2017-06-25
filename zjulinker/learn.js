/**
 * Created by dongming on 2017/6/23.
 */
var foo=function(){  console.log(1); } //函数表达式定义的函数在定义之前无法调用
function foo(){  console.log(2); } //声明式函数属于顶级作用域范围，会变量提升
foo();  //结果为1