const log = console.log.bind(console)
const f1 = (callback) => {
    callback(null, "zhao")
}
const f2 = (callback) => {
    // first paramter is error
    callback(null, "jin")
}
const f3 = (callback) => {
    callback(null, "ting")
}
const __main = () => {
    var a = require('async')
    var stack = []
    stack.push(f1)
    stack.push(f2)
    stack.push(f3)

    a.parallel(stack, function(err, results){
        log(results)
    })
}
const __main2 = () => {
    var a = require('async')
    var stack = {}
    stack = {
        one: function(callback) {
            callback(null, 'zhao')
        },
        two: function(callback) {
            callback(null, 'jin')
        },
        three: function(callback) {
            callback(null, 'ting')
        },
    }

    a.parallel(stack, function(err, results){
        log(results)
    })
}
__main2()
