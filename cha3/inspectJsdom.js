const log = console.log.bind(console)
const __main2 = () =>  {
    let util = require('util')
    let jsdom = require('url')
    //
    log(util.inspect(jsdom, true, null, true))
    // 1th argu 你要检查的对象
    // 2th argu 是否看检查对象中不可枚举的属性
    // 3th argu 设置 深度 null 为 遍历 到结束
    // 4th argu 指定是否使用ANSI颜色输出信息
}
__main2()
