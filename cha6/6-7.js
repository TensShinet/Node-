const log = console.log.bind(console)
const clearSession = (req, res, next) => {
    if('/clear' == req.url) {
        req.session = null
        res.statusCode = 302
        res.setHeader('Location', '/')
        res.end()
    } else {
        next()
    }
}
const trackUser = (req, res, next) => {
    req.session.ct = req.session.ct || 0
    req.session.username = req.session.username || req.cookies.username
    log(req.cookies.username + ' requested ' + req.session.ct++
                    + ' resources this session ')
    next()
}
const __main = () => {

    var connect = require('connect'),
        http = require('http'),
        base = 'D:/webroot',
        app = connect(),
        logger = require('morgan'),
        serveStatic = require('serve-static'),
        cookieParser = require('cookie-parser'),
        cookieSession = require('cookie-session')
    // cookieSession 提供安全的对话的持久性 文本内容 被当作 字符串传递给 cookieParser
    // 为 session 提供安全码 session 数据直接添加到 session 对象中
    // 清除 session 数据的时候, 设置该 session 数库为 null

    app.use(logger('dev'))
       .use(cookieParser('mumble'))
       .use(cookieSession({keys: 'tracking'}))
       .use(clearSession)
       .use(trackUser)
       .use(serveStatic(base))
    http.createServer(app).listen(8124)
    log('run in 8124')
}
const __mainTest = () => {
    var cS = require('cookie-session')
    log(cS())
}
__main()
// __mainTest()
