#!/usr/bin/node

var cp = require('child_process');

console.log('I am father process.PID:',process.pid);

//执行外部程序 02-child.js
cp.execFile('./02-child.js',function(err,stdout,stderr){
  console.log(stdout);
})
