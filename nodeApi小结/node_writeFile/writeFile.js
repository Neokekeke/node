
var fs = require('fs');

// 写文件
/*
    第一个参数：文件要写到的路径
    第二个参数：文件要写的内容
    第三个参数：文件的回调函数 , error参数
*/

fs.writeFile('./你好.txt' , '这是writeFileAPI写入的内容' , function (error) {
    if (error) {
        console.log("写入文件失败了",error);
    }
    else {
        console.log("文件写入成功了",error);
    }
});
