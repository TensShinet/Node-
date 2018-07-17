const log = console.log.bind(console)
const __main = () => {
    var crossroads = require('crossroads'),
        http = require('http'),
        httpProxy = require('http-proxy')
    // 书上又错了, 不能那样写
    httpProxy.createServer({
        target: {
            host: 'localhost',
            port: 8124,
        },
    }).listen(8000)

    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type': 'text/plain',})
        res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers,
            true, 2))
        res.end()
    }).listen(8124)
    log('run on 8124')
}
const __mainTest = () => {
    var http = require('http'),
        httpProxy = require(http-proxy)

    httpProxy.createSever(8124, 'localhost').listen(9000)

    http.createServer(function(req, res){

        res.end()
    }).listen(8124)
}
__main()
// __mainTest()
