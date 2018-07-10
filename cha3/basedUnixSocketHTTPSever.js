const log = console.log.bind(console)
const __main = () => {
    let http = require('http')
    let fs = require('fs')

    http.createServer(function(req, res){
        let query = require('url').parse(req.url).query
        log(query)
        let file = require('querystring').parse(query.file)

        res.writeHead(200, {'Content-type': 'text/plain',})
        for (let i = 0; i < 100; i++) {
            res.write(i + '\n')
        }

        let data = fs.readFileSync(file, 'utf8')
        res.write(data)
        res.end()
    }).listen('/tmp/node-sever-sock')
}
__main()
