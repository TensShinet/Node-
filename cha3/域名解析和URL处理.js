const log = console.log.bind(console)
const __main1 = () =>  {
    let dns = require('dns')

    dns.lookup('qq.com', function(err, ip){
        if(err) {
            throw err
        }
        log(ip)
    })
    dns.reverse('111.161.64.40', function(err, domains){
        if(err) {
            throw err
        }
        domains.forEach(function(d){
            log('what is the d:', d)
        })
    })
}

const __main2 = () => {
    let url = require('url')
    let urlObj = url.parse('http://www.baidu.com:8080/?file=main')

    // log(urlObj)

    let qs = urlObj.query

    log(qs, url.format(urlObj))
}
__main2()
