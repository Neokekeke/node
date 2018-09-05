
// node中是没有全局作用域的，只有模块作用域
// 也即是node的作用域只能在当前的模块中使用，在外部是访问不到的
// 默认是封闭的
// require()函数的两个作用：1、加载文件模块并执行里面的代码 ； 2、拿到加载到的文件模块导出的接口对象（exports）

// 思考：怎么让其它模块也能访问到数据呢？
// exports , module.exports

var foo = 'aaa';

console.log('a.js start');

require('./b.js');

console.log(foo);

console.log('a.js end');

console.log(exports , module.exports);