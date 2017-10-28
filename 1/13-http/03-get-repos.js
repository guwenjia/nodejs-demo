#!/usr/bin/node

var https= require('https');
const { URL  }=require('url');


var user = process.argv[2] || 'guwenjia'; 
var addr = 'http://api.github.com/search/repositories?q=user:'+ user;

var options = url.parse(addr);




http.get(new URL(addr),function(res){
  var result = '';

  res.on('data',function(data){
    result += data.toString('utf-8')
  });


    res.on('end',function(){
      var repos = JSON.parse(result);
      console.log(repos);
    })  
});


