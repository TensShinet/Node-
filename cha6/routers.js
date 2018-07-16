const log = console.log.bind(console)
const __main = () => {
    var crossroads = require('crossroads'),
        http = require('http'),
        connect = require('connect'),
        severStatic = require('serve-static'),
        base = 'D:/webroot',
        app = connect()

    crossroads.addRoute('/abc/{type}/:pub:/:id:', function(type, pub, id){
        if(!id && !pub) {
            log('Acessbing all entries:' + type)
            return
        } else if (!id) {
            log('Acessbing all entries:' + type + 'pub:' + pub)
            return
        } else {
            log("item: " + type, ' ', pub, ' ', id)
        }
    })
    app.use(function(req, res, next){
        crossroads.parse(req.url)
        next()
    })
    app.use(severStatic(base))

    http.createServer(app).listen(8124)
    log('running on 8124')
}
const __mainTest = () => {
    var crossroads = require('crossroads'),
        http = require('http'),
        connect = require('connect'),
        severStatic = require('serve-static'),
        base = 'D:/webroot',
        app = connect()

    crossroads.addRoute('/{type}/:pub:/:id:', function(type, pub, id){
        log('execuate')
        if(!id && !pub) {
            log('Acessbing all entries:' + type)
            return
        } else if (!id) {
            log('Acessbing all entries:' + type + 'pub:' + pub)
            return
        } else {
            log("item: " + type + pub + id)
        }
    })
    http.createServer(function(req, res){
        crossroads.parse(req.url)
        res.end()
    }).listen(8124)
    log('running on 8124 __mainTest')

}
__main()
// __mainTest()
