const log = console.log.bind(console)
const doFi = (req, res, next) => {
    log('1')
    next()
}
const doSe = (req, res, next) => {
    log('2')
    next()
}
const doTh = (req, res, next) => {
    log('3')
    next()
}
const __main = () => {
    // connect static
    var connect = require('connect'),
        http = require('http'),
        base = 'D:/webroot',
        app = connect(),
        logger = require('morgan'),
        serveStatic = require('serve-static')

    http.createServer(app.
        use(logger('combined')).
        use(serveStatic(base, {redirect: true,}))
    ).listen(8124)
    log('run in 8124')
}
const __mainTest = () => {
    var connect = require('connect'),
        app = connect(),
        serveStatic = require('serve-static')

    // log(serveStatic())
}
__main()
// __mainTest()
