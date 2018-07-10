const log = console.log.bind(console)
const __main = () =>  {
    var cmd = require('child_process').spawn('cmd', ['/c', 'dir\n'])

    cmd.stdout.on('data', function(data){
        log('stdout:', data)
    })

    cmd.stderr.on('data', function(data){
        log('stderr:', data)
    })

    cmd.on('exit', function(code){
        log('child_process exited with code:', code)
    })
}
__main()
