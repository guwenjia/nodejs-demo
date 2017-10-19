#!/usr/bin/node

var fs = require('fs');

var dir = process.argv[2];
fs.mkdir(dir,function(err){
  if(err){
  console.log('error!');
  
  }
});

//fs.mkdirSync(dir);
