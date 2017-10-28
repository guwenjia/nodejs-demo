#!/usr/bin/node

var cp = require('child_process');

//控制台打印一个父进程信息
console.log('I am father process.PID:',process.pid);

//调用spawn方法
var child = cp.spawn('cat',['02-spawn-v1.js']);

//流的操作 管道重定向 
child.stdout.pipe(process.stdout);
child.stderr.pipe(process.stderr);
