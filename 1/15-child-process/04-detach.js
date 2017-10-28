#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process.PID',process.pid);
//子程序运行16S，每2S产生一次数据
var child = cp.spawn('./02-child.js',[],{detach:true,stdio:['ignore',1,2]});

//把数据管道输出到我们的屏幕上
//child.stdout.pipe(process.stdout);
//child.stderr.pipe(process.stderr);

child.unref();
//父进程运行5S
setTimeout(function(){
  console.log('5 seconds passed.Father process game over!')
  process.exit(0);

},5000);
