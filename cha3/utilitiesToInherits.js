const log = console.log.bind(console)
function First() {
    let self = this
    self.name = 'f'
    self.test = () => {
        log(self.name)
    }
}
const __main2 = () =>  {
    let util = require('util')
    First.prototype.output = function() {
        log(this.name)
    }

    function Second() {
        Second.super_.call(this)
        this.name = 's'
    }
    util.inherits(Second, First)

    let two = new Second()

    function Third(func) {
        this.name = 'T'
        this.callMethod = func
    }
    let three = new Third(two.test)

    two.output()
    two.test()
    three.callMethod()
}
__main2()
