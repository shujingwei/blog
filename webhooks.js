var http = require('http')
var exec = require('child_process').exec

http.createServer(function (req, res) {
    // console.log(req);
    // 该路径与WebHooks中的路径部分需要完全匹配，实现简易的授权认证。
    console.log(req.url);
    if(req.url === '/webhooks/push/blog'){
        // 如果url匹配，表示认证通过，则执行 sh ./deploy.sh
	console.log("pull...");
        exec('sh ./deploy.sh', (error, stdout, stderr) => {
		if(error) { console.log("error:" + error); return; }
		if(stderr) { console.log("stderr:" + stderr); }
		console.log(stdout.slice(0, -1));
	})
    }
    console.log("server start!");
    res.write('ok');
    res.end();
}).listen(4001);
console.log('start listening 4001 port...');
