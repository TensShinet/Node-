const log = console.log.bind(console)
const __main = () => {
    let dgram = require('dgram')

    let client = dgram.createSocket('udp4')

    process.stdin.resume()

    process.stdin.on('data', function(data){
        client.send(data, 0, data.length, 8124, 'localhost', function(err, bytes){
            // client.send() 第四个参数 是一个地点, 比如localhost
            log(data.toString('utf8'))
            if(err) log('CNMerr:' + err)
            else log('successful')
        })
    })

}

__main()
