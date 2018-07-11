const log = console.log.bind(console)

const __main = () => {
    var fs = require('fs'),
        async = require('async')

    try {
        async.waterfall([
            function readData(callback) {
                fs.readFile('./data/data1.txt', 'utf8', function(err, data){
                    callback(err, data)
                })
            },
            function modify(text, callback) {
                var adjData = text.replace(/:/g, '??')
                callback(null, adjData)
            },
            function writeData(text, callback) {
                fs.writeFile('./data/data1.txt', text, function(err){
                    callback(err, text)
                })
            },
        ], function (err, result){
            if(err) throw err
            log(result)
        })
    } catch(err) {
        console.error(err)
    }
}

__main()
