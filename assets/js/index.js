
var canvas,ctx,cw,ch;
var player,enemys,bullets;
J.load(function(){
  if(!J.isMobile()){
    J.id("keyboard").css("display","none");
  }else{
    J.class("key-item").event("onclick","sendBullet(this.txt())");
  }
});
J.ready(function(){
  initCanvas();
  initObjects();
  start();
  geneEnemy();
});
function initCanvas(){
  canvas=J.id("gameCanvas");
  cw=J.width();
  ch=J.height();
  if(J.isMobile()){
    ch-=J.id("keyboard").hei();
  }
  canvas.width=cw;
  canvas.height=ch;
  ctx=canvas.getContext("2d");
  ctx.strokeStyle="#000";
  ctx.fillStyle="#fff";
  ctx.textBaseline = 'middle';//设置文本的垂直对齐方式
  ctx.textAlign = 'center';
}
function initObjects(){
  player=new Player();
  enemys=new Array();
  bullets=new Array();
}
function geneEnemy(){
  setInterval(function(){
    enemys.append(new Enemy());
  },2500);
}
function start(){
  setInterval(function(){
    ctx.clearRect(0,0,cw,ch);
    player.act();
    enemys.each(function(item){
      item.act();
    });
    bullets.each(function(item){
      item.act();
    });
  },50);
}
function sendBullet(letter){
  if(enemys.length>0){
    bullets.append(new Bullet(letter));
  }
}
function countDis(obj1,obj2){
  return Math.sqrt(Math.pow(obj1.x-obj2.x,2)+Math.pow(obj1.y-obj2.y,2));
}
//a-z:97-122
//keyCode 65-90
window.onkeydown=function(event){
  var code=event.keyCode;
  if(code>=65&&code<=90){
    sendBullet(String.fromCharCode(code+32));
  }
}