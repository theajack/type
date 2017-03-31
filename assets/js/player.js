function Player(){
  this.w=30;
  this.h=30;
  this.x=cw/2;
  this.y=ch-this.h/2;
  this.drawx=this.x-this.w/2;
  this.drawy=this.y-this.h/2;
};Player.prototype.act=function(){
  this.draw();
};Player.prototype.draw=function(){
  ctx.fillRect(this.drawx,this.drawy,this.w,this.h);
};Player.prototype.resetPos=function(){
  this.x=cw/2;
  this.y=ch-this.h/2;
  this.drawx=this.x-this.w/2;
  this.drawy=this.y-this.h/2;
}