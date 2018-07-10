var counter = 0
const log = console.log.bind(console)
const writeNumbers = (res) => {
    for(let i = 0; i < 100; i++) {
        counter++
        res.write(counter.toString() + '\n')
    }
}
const __main = () => {
    let http = require('http')
    let fs = require('fs')

    http.createServer(function(req, res){
        let query = require('url').parse(req.url).query
        // log(query)
        let app = require('querystring').parse(query).file + '.txt'
        res.writeHead(200, {'Content-Type': 'text/plain'})
        // log(query, app)
        writeNumbers(res)

        setTimeout(function(){
            log('oppening ' + app)
            fs.readFile(app, 'utf8', function(err, data){
                if(err) { res.write('unable\n') }
                else { res.write(data) }
                res.end()
            }, 1000)
        })
    }).listen(8124)
    log('sever on 8124')
}
__main()
