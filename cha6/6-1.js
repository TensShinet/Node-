const log = console.log.bind(console)

const __main = () => {
    var http = require('http'),
        path = require('path'),
        fs = require('fs'),
        base = 'D:\\webroot'

    http.createServer(function(req, res){
        var pathname = base + req.url
        // log(pathname)
        if(!fs.existsSync(pathname)) {
            res.writeHead(404)
            res.write('Bad request 404\n' + req.url)
            res.end()
        } else {
            res.setHeader('Content-Type', 'text/html')
            res.statusCode = 200

            var file = fs.createReadStream(pathname)
            file.on('open', function(){
                file.pipe(res)
            })
            file.on('error', function(err){
                log(err)
            })
        }
    }).listen(8124)

    log('sever running at 8124')
}

__main()
