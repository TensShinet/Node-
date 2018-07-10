const log = console.log.bind(console)
const closeInterface = () => {
    log('leave')
    process.exit()
}
const __main = () => {
    let rl = require('readline')

    let interface = rl.createInterface(process.stdin, process.stdout, null)
    interface.question('>what is the life? ', function(ans){
        log('you said ' + ans)
        interface.setPrompt('>>')
        interface.prompt()
    })

    interface.on('line', function(cmd){
        if(cmd.trim() == '.leave') {
            closeInterface()
            return
        } else {
            log('repeating commands: ', cmd)
        }
        interface.setPrompt('>>')
        interface.prompt()
    })

    interface.on('close', function(){
        closeInterface()
    })
}
__main()
