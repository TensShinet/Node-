const log = console.log.bind(console)
const __main = () => {
    // connect static
    var connect = require('connect'),
        http = require('http'),
        base = 'D:/webroot',
        app = connect(),
        logger = require('morgan'),
        serveStatic = require('serve-static'),
        cookieParser = require('cookie-parser')

    app.use(logger('dev'))
       .use(cookieParser())
       .use(function(req, res, next) {
           var c = req.cookies
           log('tracking:' + c.username, '\ncookies:' + JSON.stringify(c, null, 4))
           next()
        })
       .use(serveStatic(base))
    http.createServer(app).listen(8124)
    log('run in 8124')
}
const __mainTest = () => {
}
__main()
// __mainTest()
