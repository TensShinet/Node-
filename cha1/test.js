const log = console.log.bind(console)
const __main = () => {
    let http = require('http')
    let fs = require('fs')
    let app = 'main.txt'

    http.createServer(function(req, res){
        
    }).listen(8125)

    log('sever on 8125')
}
__main()
