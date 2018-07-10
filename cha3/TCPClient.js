const log = console.log.bind(console)
const __main = () => {
    let net = require('net')
    let client = new net.Socket()
    client.setEncoding('utf8')

    client.connect('8124', 'localhost', function(){
        log('connected')
        client.write('who needs a browser to communicate?')
    })

    process.stdin.resume()
    process.stdin.on('data', function(data){
        client.write(data)
    })
    client.on('data', function(data){
        log(data)
    })
    client.on('error', function(err){

    })
    client.on('close', function(){
        log('connected is closed')
    })
}
__main()
