const log =  console.log.bind(console)
const __main = () => {
    // let http = require('http')
    // let fs = require('fs')
    //
    // fs.readFile('../cha1/helloworld.js', 'utf8', function(err, data){
    //     if(err) { log(err + 'unable\n') }
    //     else { log(data) }
    // })

    // process 对象中的许多方法, 和属性能提供关于应用程序身份标识和当前-
    // -运行环境的的信息,
    // 比如
    // process.execPath 当前应用程序执行路径
    // process.version 提供了 node 版本信息
    // process.platform

    // log(process.execPath + '\n', process.version + '\n', process.platform + '\n')

    // process 对象对一些 标准输入输出流也进行了封装
    // 包括 标准输入流 stdin 标准输出流 stdout 标准错误输出 stderr
    // stdin stdout 支持异步操作 前者可读 后者可写
    // stderr 是一个同步可阻塞流

    // 在终端上 用键盘输入信息 每次你输入的信息按回车后就会被回显
    // process.stdin.resume()
    // process.stdin.on('data', function(chunk){
    //     process.stdout.write('data: ' + chunk)
    // })

    // process 对象的另一个常用的方法是 memoryUsage
    // 通过它我们可以查询 当前 node 应用程序的是用量 这对应用程序的性能调整是非常有用的

    // 如果由于某种原因 你想延迟并且异步的执行某一个函数调用
    // 可以使用, process.nextTick
    // 一个很好的例子

    const asynchFunction = (data, callabck) => {
        process.nextTick(function(){
            callabck(val)
        })
    }

}
__main()
