// 首先介绍一些术语,
// 套接字(socket) 通信端点
// 网络套接字(net work) 同一个网络中, 在两台不同计算机上, 运行的应用程序之间的通信端点
// 套接字之间传送的数据被称为流(stream)
// 我们可以通过一个buffer对象在流中 传送二进制数据或者 通过unicode 编码方式来传送一个字符串-
// -两种类型的数据最终会包装为数据包(packets)
// 部分数据会被分拆成特定的大小的包
// 套接字 可以 通过发送一种特殊的数据包 FIN (完成数据包) 来表明本次传输已经完成

// 创建一个 TCP 服务器

const log = console.log.bind(console)
const __main = () => {
    let net = require('net')
    let sever = net.createServer(function(conn){
        log('connected\n')

        conn.on('data', function(data){
            log(data + 'from' + conn.remoteAddress + ' ' +
                    conn.remotePort)
            conn.write('Repeating: ' + data)
        })
        conn.on('error', function(err){
        
        })
        conn.on('close', function(){
            log('client closed connection')
        })
    }).listen(8124)
    // createServer 有第二个参数, allowHalfOpen
    // 默认值是 false
    // 如果设置为 true 从客户端接收一个FIN包 就不会返回一个FIN包
    log('listen 8124')
}
__main()
