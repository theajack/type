function Bullet(letter){
  this.w=6;
  this.h=6;
  this.x=player.x;
  this.y=player.y-player.h/2;
  this.letter=letter;
  this.target=this.findTarget();
};Bullet.prototype.act=function(){
  if(this.target!=null){
    var rate=this.speed/countDis(this,this.target);
    this.x+=(rate*(this.target.x-this.x));
    this.y+=(rate*(this.target.y-this.y));
    if(this.touchTarget()){
      this.target.hurt();
      this.die();
    }
    this.draw();
  }else{
    bullets.remove(this);
  }
};Bullet.prototype.draw=function(){
  ctx.font="25px MicrosofeYahei";
  ctx.fillText(this.letter,this.x,this.y);
  //ctx.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h);
};Bullet.prototype.findTarget=function(){
  for(var i=0;i<enemys.length;i++){
    if(enemys[i].check(this.letter)){
      return enemys[i];
    }
  }
  return null;
};Bullet.prototype.touchTarget=function(){
  return (this.y-this.h/2<this.target.y+this.target.h/2);
};Bullet.prototype.die=function(){
  bullets.remove(this);
};Bullet.prototype.speed=8;