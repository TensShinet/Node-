const log = console.log.bind(console)
const __main = () => {
    var http = require('http')
    var fs = require('fs')

    http.createServer(function(req, res){
        fs.readFile('helloworld.js', 'utf8', function(err, data){
            res.writeHead(200, {'Content-Type': 'text/plain'})
            if(err) { res.write('unable\n') }
            else { res.write(data) }

            res.end()
        })
    }).listen(8124, function(){ log('bound to port 8124') })

    log('sever on 8124')
}
