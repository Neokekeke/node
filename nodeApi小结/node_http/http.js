// 1、引入http模块以启动服务器
var http = require('http');

// 2、创建node服务器，创建个http server实例
var server = http.createServer();

// 3、服务器的工作：
//       接收客户端请求
//       处理客户端请求
//       响应和反馈客户端请求
// 注册request请求的事件，执行回调函数
// 回调函数有两个参数：request，response
// request : 请求对象 （可以获取客户端的一些请求信息，如url）
// response : 响应对象 （可以给客户端发送一些响应信息）
server.on('request', function (req, res) {
    console.log("接收到客户端请求了", req.url);

    // 响应客户端请求
    switch (req.url) {
        // case "/" : res.write('index');
        // break;
        case "/login":
            res.write('login');
            break;
        case "/regsiter":
            res.write('regsiter');
            break;
            // default : res.write('page not found');
    }

    // 设置返回的编码请求头，默认是按操作系统的编码格式中文系统是GBK，需要告诉浏览器用utf-8解析，不然会出现乱码
    // 在http协议中，content-type就是用来告知对方我发送的数据内容是什么类型
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    var person = [{
            name: "Neo",
            age: 18
        },
        {
            name: 'Cherry',
            age: 19
        }
    ]
    // 响应结束后必须结束，不然浏览器一直在等待
    // 接收的参数是一个字符串或者是一个buffer二进制数据
    res.end(JSON.stringify(person));
});

// 4、启动服务器，加上端口号
server.listen(3000, function () {
    console.log("服务器启动了，端口号：3000");
});