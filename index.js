let http = require('http')

let server = http.createServer(function(req,res){
  console.log('111')
  res.setHeader('Content-Type','text/plain');
  res.end('hello112233444')
}).listen(3000)