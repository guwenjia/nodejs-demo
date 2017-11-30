#!/usr/bin/node

var http = require('http');

http.createServer(function(req,res){
  switch(req.url){
    case '/':
      sendNormalMsg(res);
      break;

    case '/admin':
      sendSecretMsg(req,res);
      break;

    default:
      sendErrorMsg(res);
  }
}).listen(8080);

function sendSecretMsg(req,res){
  if(req.headers.authorization){
    console.log(req.headers.authorization);
 
    //parse authorization data from base64 to plain text
    //get username and password
    //judge account correct
    
    res.end('1023478561');
  //if account incorrect
  //continue to auth
  }else{
    res.writeHead(401,{'WWW-Authenticate':'Basic'});
    res.end('who you are?');
  }
}
function sendNormalMsg(){
  console.log('Who you are?');
}

