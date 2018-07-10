const log = console.log.bind(console)
const __main = () => {
    let dgram = require('dgram')
    let sever = dgram.createSocket('udp4')
    sever.on('message', function(msg, rinfo){
        log('message' + msg + 'from' + rinfo.address + ':' + rinfo.port)
    })

    sever.bind(8124)

}
__main()
