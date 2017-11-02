var items;//待办事项
get (show);

//得到数据
function get(cb){
  document.getElementById('output').innerHTML = "";

  fetch('http://192.168.146.144:8080').then(function(res){
    res.text().then(function(data){
      items = JSON.parse(data);
      cb();
    });
});
}

//展示数据
function show(){
  var str = '<ul>\n';

  for (var i=0;i<items.length;i++){
    str += '<li>'+items[i]+'</li>\n';
  }

  str += '</ul>';
  document.getElementById('output').innerHTML = str;
}

//追加数据
function add(){
  var item = document.getElementById('todo').value;

  if(item ==='')return;
  items.push(item);
  show();
  fetch('http://192.168.146.144:8080',{method:'POST',body:item});
}
