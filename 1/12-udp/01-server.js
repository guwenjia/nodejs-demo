#!/usr/bin/node
//引用数据报模块
var dgram = require('dgram');
//调用daram类中的createSocket方法  使用的是IPv4的地址模式
var socket= dgram.createSocket('udp4');

//监听8080端口
socket.bind(8080);

socket.on('message',function(msg,rinfo){
  var line = msg.toString('utf8');

  process.stdout.write(line,line.length);
});

socket.on('listing',function(){
  console.log('Server ready',socket.address());
});
