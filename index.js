let http = require('http')

let server = http.createServer(function(req,res){
  res.setHeader('Content-Type','text/plain;charset=utf8');
  res.end('好好学习，天天向上！！！')
}).listen(3000)