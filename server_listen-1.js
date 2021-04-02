var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write(" <head>");
  res.write("   <title>응답 페이지</title>");
  res.write(" </head>");
  res.write(" <body>");
  res.write("   <h1>node.js로부터의 응답 페이지 : silverlisten-1.js</h1>");
  res.write(" </body>")
  res.write("</html");
  res.end();
}).listen(3000);