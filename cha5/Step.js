const log = console.log.bind(console)
// simple usage of step
const __main = () => {
    var fs = require('fs'),
        Step = require('step')

        try {
            Step (
                function readData() {
                    fs.readFile('./data/1.txt', 'utf8', this)
                },
                // this 相当于调用了下个函数吧 给下个函数提供 parameters
                function modify(err, text) {
                    if(err) throw err
                    return text.replace(/a/g, 'b')
                },
                // the parameters from the first func will give this func
                function writeData(err, text) {
                    if(err) throw err
                    fs.writeFile('./data/data2.txt', text, this)
                },
            )
        } catch (err) {
            log(err)
        }

}
// group() of Step to handle asynchronous
const __main2 = () => {
    var fs = require('fs'),
        Step = require('step'),
        files,
        _dir = './data/'

        try {
            Step(
                function readDir() {
                    fs.readdir(_dir, this)
                },
                function readFile(err, results) {
                    if(err) throw err
                    files = results
                    var group = this.group()
                    results.forEach(function(name){
                        fs.readFile(_dir + name, 'utf8', group())
                        // emmm 不知道怎么实现的
                        // 反正 就是要这么写,
                        // 传递给下一个函数的, 是这个循环的结果
                    })
                },
                function writeAll(err, data) {
                    if(err) throw err
                    for (var i = 0; i < files.length; i++) {
                        var adjdata = data[i].replace(/a/g, 'b')
                        fs.writeFile(_dir + files[i], adjdata, 'utf8', this)
                    }
                },
            )
        } catch (err) {
            console.error(err)
        }
}

// parallel() of Step to handle asynchronous
const __main3 = () => {
    var fs = require('fs'),
        Step = require('step'),
        files,
        _dir = './data/'

        try {
            Step(
                function readFiles() {
                    fs.readFile(_dir + '1.txt', 'utf8', this.parallel())
                    fs.readFile(_dir + '1.txt', 'utf8', this.parallel())
                    fs.readFile(_dir + '1.txt', 'utf8', this.parallel())
                },
                // 可能大概的意思就是
                // this.parallel() 调用后面的 保证顺序进行
                // 然后, 产生的参数会给下一个函数
                function writeFiles(err, data1, data2, data3) {
                    if(err) throw err
                    data1 = data1.replace(/b/g, 'a')
                    data2 = data2.replace(/b/g, 'a')
                    data3 = data3.replace(/b/g, 'a')

                    fs.writeFile('./data/data4.txt', data1, 'utf8', this.parallel())
                    fs.writeFile('./data/data5.txt', data2, 'utf8', this.parallel())
                    fs.writeFile('./data/data6.txt', data3, 'utf8', this.parallel())
                },
            )
        } catch (err) {
            console.error(err)
        }
}
__main3()
