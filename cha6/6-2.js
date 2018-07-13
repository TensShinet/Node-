const log = console.log.bind(console)
const __main = () => {
    var http = require('http'),
        url = require('url'),
        mime = require('mime'),
        base = 'D:/webroot',
        fs = require('fs')

    http.createServer(function(req, res){
        var pathname = base + req.url
        log(pathname)

        fs.stat(pathname, function(err, stat){
            if(err) {
                res.writeHead(404)
                res.write('bad request 404\n')
                res.end()
            } else if (stat.isFile()) {

                var type = mime.lookup(pathname)
                log(type)
                res.setHeader('Content-Type', type)
                res.statusCode = 200
                var file = fs.createReadStream(pathname)

                file.on('open', function(){
                    file.pipe(res)
                })
                file.on('error', function(err){
                    log(err)
                })
            } else {
                res.writeHead(403)
                res.write('Directory acess is forbidden')
                res.end()
            }
        })
    }).listen(8124)


    log('sever is running on 8124')
}
const __mainTest = () => {
    var mime = require('mime')

    try {
        log(mime.lookup('D:/webroot'))
    } catch (e) {
        log(e)
    }
}
__main()
// __mainTest()
