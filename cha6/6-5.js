const log = console.log.bind(console)
const __main = () => {
    // connect static
    var connect = require('connect'),
        http = require('http'),
        base = 'D:/webroot',
        app = connect(),
        logger = require('morgan'),
        serveStatic = require('serve-static'),
        fs = require('fs')
    var writeStream = fs.createWriteStream('./log.txt', {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': 0o666,
    })

    http.createServer(app.
        use(logger('combined', {format: 'dev', stream: writeStream})).
        use(serveStatic(base, {redirect: true,}))
    ).listen(8124)
    log('run in 8124')
}
const __mainTest = () => {
}
__main()
// __mainTest()
