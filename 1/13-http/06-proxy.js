#!/usr/bin/node

var http = require('http'),
    url = require('url');

//启动一个http服务 可以接收客户端的请求
http.createServer(function(req,res){
  console.log(req.headers);

  var options = url.parse(req.url);//②
  options.headers = req.headers;//①

  //把请求重新封装 ①把客户端请求头变成我们自己的请求头 ②客户端请求的URL地址变成我们请求的URL地址 
  //调用http模块的request函数，向目标程序发送请求
  var proxyRequest = http.request(options,function(proxyResponse){
    proxyResponse.on('data',function(chunk){
      console.log(chunk);
      res.write(chunk,'binary');
    });//收到数据 传送给客户端
    proxyResponse.on('end',function(){res.end();});
//收到end结束 响应结束


  console.log(proxyResponse.statusCode,proxyResponse.headers);
  res.writeHead(proxyResponse.statusCode,proxyResponse.headers);//状态码发送给客户端
  });

req.on('data',function(chunk){
  console.log(chunk);
  proxyRequest.write(chunk,'binary');

});

req.on('end',function(){
  proxyRequest.end();
});
}).listen(8080);
