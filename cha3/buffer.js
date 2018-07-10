const log = console.log.bind(console)
const __main = () => {
    let s = 'fjz is a silly girl'
    let buf = new Buffer(s)
    // 第二个参数可以是
    // ascii
    // utf8
    // usc2
    // base64
    // hex

    // 还可以写入

    let s2 = 'fjz is a silly boy'
    buf.write(s2)
    // 有很多参数
    // 偏移量 默认为0
    // 数据长度
    // 编码


}
__main()
