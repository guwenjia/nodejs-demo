#!/usr/bin/node

var fs = require('fs');

var src = process.argv[2];
var dst = process.argv[3];

fs.writeFile(dst,fs.readFile(src,function(err){
  if(err){
    console.log('error!');
  }
}),function(err){
  if(err){
    console.log('error!');
  }
});
fs.chmod(dst,fs.statSync(src).mode,function(err){
  if(err){
    console.log('error!');
  }
});

