// 使用 connect httpProxy crossroads
const log = console.log.bind(console)

const __main = () => {
    var http = require('http'),
        httpProxy = require('http-proxy'),
        fs = require('fs'),
        base = 'D:/webroot',
        connect = require('connect'),
        app = connect(),
        crossroads = require('crossroads'),
        severStatic = require('serve-static'),
        logger = require('morgan')
    var proxy = httpProxy.createProxyServer({});

    http.createServer(function(req, res) {
        if(req.url.match(/^\/node\//)) {
            proxy.web(req, res, {target: 'http://127.0.0.1:8000'})
        } else {
            proxy.web(req, res, {target: 'http://127.0.0.1:8124'})
        }
    }).listen(10000)

    crossroads.addRoute('/node/{id}/', function(id){
        log('accessed node ', id)
    })
    // dynamic request
    http.createServer(function(req, res){
        crossroads.parse(req.url)
        res.end('that is all')
    }).listen(8000)
    // static request
    http.createServer(
        app.use(logger('dev'))
           .use(severStatic(base))
    ).listen(8124)

    log('running on 10000')
}
const __mainTest = () => {
}
// __mainTest()
__main()
