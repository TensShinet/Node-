const log = console.log.bind(console)

const __main = () => {
    var fs = require('fs')

    var writeStream = fs.createWriteStream('./log.txt', {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': 0o666,
    })
    try {
        fs.readdir('./data/', function(err, files){
            if(err) { throw err }
            files.forEach(function(name){
                fs.readFile('./data/' + name, 'utf8', function(err, data){
                    if(err) { throw err }
                    var adjData = data.replace(/somecompany\.com/g, 'woaini')
                    fs.writeFile('./data/' + name, adjData, function(err){
                        if(err) { throw err }
                        writeStream.write('changed' + name + '\r\n', 'utf8', function(err){
                            if (err) {
                                throw err
                            }
                        })
                    })
                })
            })
        })
    } catch(err) {
        throw err
    }
}
// following code is for line feed, ultimately discover writeStream need '\r\n' to line feed
// const __main2 = () => {
//
//     var fs = require('fs')
//     var writeStream = fs.createWriteStream('./log.txt', {
//         'flags': 'a',
//         'encoding': 'utf8',
//         'mode': 0o666,
//     })
//     for (var i = 0; i < 10; i++) {
//         log('execute\n')
//         writeStream.write('changed\r\n', 'utf8', function(err){
//             if (err) {
//                 throw err
//             }
//         })
//     }
// }
__main()
