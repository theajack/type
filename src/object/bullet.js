import {getBulletImg, getDieImg} from '../resource';
import {Game} from '../store';
import {showInfo} from '../util';

let BulletSpeed = 15; // 30

export function setBulletSpeed (speed) {
    BulletSpeed = speed;
}
 
export class Bullet {
    constructor (letter) {
        this.speed = BulletSpeed;
        this.w = 110;
        this.h = 110;
        this.x = Game.player.x;
        this.y = Game.player.y - Game.player.h / 2 + this.h / 2;
        this.letter = letter;
        this.deg = 0;
        this.target = this.findTarget();
        this.img = getBulletImg();
        this.dieImg = getDieImg();
        this.isDie = false;
        this.dieIndex = -1;
        this.dieLen = 50;
        this.isRemove = false;
    }
    act () {
        if (!this.isRemove) {
            if (this.target != null) {
                if (this.isDie) {
                    this.dieIndex++;
                    if (this.dieIndex >= this.dieImg.length) {
                        this.dieIndex--;
                        this.remove();
                    }
                } else {
                    // const a = this.speed / countDis(this, this.target);
                    this.x += this.speed * Math.sin(this.deg);
                    this.y -= this.speed * Math.cos(this.deg);
                    if (this.touchTarget()) {
                        this.target.hurt();
                        this.die();
                    }
                }
                this.draw();
            } else {
                Game.bullets.remove(this);
            }
        }
    }
    draw () {
        Game.ctx.save();
        if (this.isDie) {
            const x = this.target.x - Math.sin(this.target.deg) * this.target.h / 2;
            const y = this.target.y + Math.cos(this.target.deg) * this.target.h / 2;
            Game.ctx.translate(x, y);
            Game.ctx.rotate(this.deg);
            Game.ctx.translate( - x, -y);
            Game.ctx.drawImage(this.dieImg[this.dieIndex], x - this.dieLen / 2, y - this.dieLen / 2, this.dieLen, this.dieLen);
        } else {
            Game.ctx.translate(this.x, this.y);
            Game.ctx.rotate(this.deg);
            Game.ctx.translate( - this.x, -this.y);
            Game.ctx.drawImage(this.img, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        }
        Game.ctx.restore();
    }
    findTarget () {
        if (Game.player.target != null && Game.player.target.check(this.letter)) {
            this.init(Game.player.target);
            return Game.player.target;
        } else {
            for (let i = 0; i < Game.enemys.length; i++) {
                if (Game.enemys[i].check(this.letter)) {
                    this.init(Game.enemys[i]);
                    return Game.enemys[i];
                }
            }
        }
        Game.player.setErr();
        showInfo('没有找到目标', true, 1000);
        return null;
    }
    touchTarget () {
        return (this.y - (this.h / 2 - 20) * Math.cos(this.deg) < this.target.y + (this.target.h / 2) * Math.cos(this.target.deg));
    }
    die () {
        this.dieIndex = 0;
        this.isDie = true;
    }
    remove () {
        this.isRemove = true;
        Game.player.setLetterNum();
        Game.bullets.remove(this);
    }
    init (a) {
        this.deg = a.deg;
        Game.player.setDeg(this.deg);
        Game.player.setTarget(a);
        this.x += (Math.sin(this.deg) * (Game.player.y - this.y) + 2);
        this.y -= ((Game.player.y - this.y) - (Math.cos(this.deg) * (Game.player.y - this.y)));
    }
}