
var canvas,ctx,cw,ch;
var player,enemys,bullets;
var addEnemyTime=4000;
J.ready(function(){
  if(J.isMobile()){
    Bullet.prototype.speed=6;
    Enemy.prototype.speed=0.5;
    addEnemyTime=8000;
  }
  initCanvas();
  initObjects();
  start();
  geneEnemy();
});
function initCanvas(){
  canvas=J.id("gameCanvas");
  setPos();
  ctx=canvas.getContext("2d");
  ctx.strokeStyle="#000";
  ctx.fillStyle="#fff";
  ctx.textBaseline = 'middle';//设置文本的垂直对齐方式
  ctx.textAlign = 'center';
}
function setPos(){
  cw=J.width();
  ch=J.height();
  if(J.isMobile()){
    J.id("keyboard").css("display","block");
    J.class("key-item").event("onclick","sendBullet(this.txt())");
    ch-=J.id("keyboard").hei();
  }else{
    J.id("keyboard").css("display","none");
  }
  canvas.width=cw;
  canvas.height=ch;
}
function initObjects(){
  player=new Player();
  enemys=new Array();
  bullets=new Array();
}
function geneEnemy(){
  setInterval(function(){
    enemys.append(new Enemy());
  },addEnemyTime);
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
window.onresize=function(){
  setPos();
  player.resetPos();
}