const log = console.log.bind(console)
// emitter 简单功能介绍
const __main1 = () =>  {

    var events = require('events')
    var em = new events.EventEmitter()
    var c = 0
    setInterval(function(){
        // log("wo")
        em.emit('timed', c)
    }, 1000)
    em.on('timed', function(data){
        log('Fuck You:', data)
    })
}
// 通过继承EventEmitter创建支持事件的功能
const __main2 = () => {
    var util = require('util')
    var eventEmitter = new require('events').EventEmitter
    var fs = require('fs')

    function InputChecker(name, file) {
        this.name = name
        this.writeStream = fs.createWriteStream('./' + file + '.txt', {
            'flags': 'a',
            'encodind': 'utf8',
            'mode': '0666',
        })
    }

    util.inherits(InputChecker, eventEmitter)

    InputChecker.prototype.check = function(input) {
        var command = input.toString().trim().substr(0, 3)
        if(command == 'wr:') {
            this.emit('write', input.substr(3, input.length))
        } else if (command == 'en:') {
            this.emit('end')
        } else {
            this.emit('echo', input)
        }
    }

    var ic = new InputChecker('Shelley', 'output')

    ic.on('write', function(data){
        this.writeStream.write(data, 'utf8')
    })
    ic.on('echo', function(data){
        log(this.name + 'wrote' + data)
    })
    ic.on('end', function(data){
        process.exit()
    })

    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', function(input){
        ic.check(input)
    })
}
__main2()
