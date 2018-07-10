const log = console.log.bind(console)
const processPublicTimeLine = (res) => {
    log('finished request')
}
const __main = () => {
    let http = require('http')
    let fs = require('fs')

    let options = {
        host: 'localhost',
        port: '8124',
        path: '/?file=secondary',
        method: 'GET',
    }

    for (let i = 0; i < 2000; i++) {
        http.request(options, processPublicTimeLine).end()
    }
}
__main()
