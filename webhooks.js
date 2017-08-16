var http = require('http')
var exec = require('child_process').exec

http.createServer(function (req, res) {
    // 该路径与WebHooks中的路径部分需要完全匹配，实现简易的授权认证。
    if(req.url === '/webhooks/push/blog'){
        // 如果url匹配，表示认证通过，则执行 sh ./deploy.sh
	console.log("pull...");
        exec('sh ./deploy.sh')
    }
    console.log("server start!");
    res.end()
}).listen(4002)
