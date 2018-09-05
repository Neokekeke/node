// 引入node的文件系统模块
var fs = require('fs');

/*
    读取成功了
        data : 文件的数据
        error : null
    读取失败了
        data : undefined
        error : node的错误异常对象

*/
fs.readFile('./file.txt', function (error, data) {
    if (error) {
        console.log("错误：", error);
    } else {
        // 这里的toString()是因为读取的文件是16进制的
        console.log(data.toString());
    }
});