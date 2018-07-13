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
        // 好他妈的神奇 这怎么实现的啊
        // waterfall([
        //   function(callback){
        //     callback(null, 'one', 'two');
        //   },
        //   function(arg1, arg2, callback){
        //     callback(null, 'three');
        //   },
        //   function(arg1, callback){
        //     // arg1 now equals 'three'
        //     callback(null, 'done');
        //   }
        // ], function (err, result) {
        //   // result now equals 'done'
        // });
    } catch(err) {
        console.error(err)
    }
}

//
const __main2 = () => {
    var fs = require('fs'),
        _dir = './data/',
        async = require('async')

    var writeStream = fs.createWriteStream(_dir + 'log3.txt', {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': 0o666,
    })
    async.waterfall([
        function readDir(callback) {
            fs.readdir(_dir, function(err, files){
                callback(err, files)
            })
        },
        function loopFiles(files, callback) {
            // files.forEach(function(name){
            //     callback(null, name)
            // })
            callback(null, files[0])
            
        }
        // function checkFile(name, callback) {
        //     fs.stat(_dir+name, function(err, stats){
        //         callback(err, stats, file)
        //     })
        // },
        // function readData(stats, file, callback) {
        //     if(fs.isFile(stats)) {
        //         fs.readFile(_dir + file, 'utf8', function(err, data){
        //             callback(err, file, data)
        //         })
        //     }
        // },
        // function modify(file, text, callback) {
        //     var adjData = text.replace(/:/g, 'v')
        //     callback(null, file, adjData)
        // },
        // function writeData(file, text, callback) {
        //     fs.writeFile(_dir + file, text, function(err){
        //         callback(err, file)
        //     })
        // },
        // function logChange(file, callback) {
        //     writeStream.write('changed' + file + '\r\n', 'utf8', function(err){
        //         callback(err, file)
        //     })
        // }
    ], function(err, result){
        if(err) throw err
        log(result)
    })
}
__main2()
