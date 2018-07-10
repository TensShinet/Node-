const log = console.log.bind(console)
const __main = () => {
    let http = require('http')

    var options = {
        method: 'GET',
        socketPort: '/tmp/node-sever-sock',
        path: '/?file=main.txt',
    }

    let req = http.request(options, function(res){
            log('STATUS: ', res.statusCode)
            log('HEADERS: ', JSON.stringify(res.headers))
            res.setEncoding('utf8')
            res.on('data', function(chunk){
                log('chunk o\' data ' + chunk)
            })
    })
    req.on('error', function(e){
        log('problem is ' + e.message)
    })
    req.write('data\n')
    req.write('data\n')
    req.end()
}
__main()
