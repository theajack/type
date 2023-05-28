/*
 * @Author: tackchen
 * @Date: 2021-11-17 14:47:44
 * @LastEditors: Please set LastEditors
 * @FilePath: \type\src\object\player.js
 * @Description: Coding something
 */
import J from 'jetterjs';
import {getFireImg, getPlayerErrImg, getPlayerImg} from '../resource';
import {Game, Size} from '../store';
import {showInfo} from '../util';
import {Animation} from './animation';

export class Player {
    constructor () {
        
        this.w = 51;
        this.h = 75;
        this.x = Size.gameWidth / 2;
        this.y = Size.gameHeight - this.h / 2 - 15;
        this.drawx = this.x - this.w / 2;
        this.drawy = this.y - this.h / 2;
        this.img = getPlayerImg();
        this.err_img = getPlayerErrImg();
        this.err_i = -1;
        this.deg = 0;
        this.target = null;
        this.letterNum = 0;
        this.score = 0;
        const best = localStorage.getItem('_typeBestScore');
        this.setBestScore(best ? parseInt(best) : 0);
        this.protect = 3;
        this.isClear = false;
        this.clearPer = 10;
        this.clearIndex = 0;
        this.clearMax = Game.canvas.hei() / 2;
        this.tailY = this.y + this.h / 2 - 6;
        this.fireAni = new Animation({
            ctx: Game.ctx,
            host: this,
            img: getFireImg(),
            pos: function (a) {
                a.y = a.host.tailY + a.h / 2;
            },
            size: function (a) {
                a.h = 13 + 2 * (a.max - 1 - a.index);
            },
            x: this.x + 0.3,
            y: this.tailY + 6,
            w: 11,
            h: 12,
        });
    };
    act () {
        if (this.isClear && !Game.isStop && !Game.isPause) {
            this.clearIndex += this.clearPer;
            var b = this;
            Game.enemys.each(function (a) {
                if (a.y + a.h / 2 > b.y - b.h / 2 - b.clearIndex && !a.isDie) {
                    a.die();
                }
            });
            if (this.clearIndex > this.clearMax) {
                this.isClear = false;
                this.clearIndex = 0;
            }
        }
        this.draw();
        if (!Game.isStop && !Game.isPause) {
            this.fireAni.act();
        }
        if (this.err_i >= 0) {
            this.err_i++;
            if (this.err_i > getPlayerErrImg().length - 1) {
                this.err_i = -1;
            }
        }
    };
    draw () {
        if (this.isClear) {
            Game.ctx.fillStyle = '#fff';
            Game.ctx.fillRect(0, this.y - this.h / 2 - this.clearIndex, Size.gameWidth, 2);
        }
        Game.ctx.save();
        Game.ctx.translate(this.x, this.y);
        Game.ctx.rotate(this.deg);
        Game.ctx.translate( - this.x, -this.y);
        if (this.err_i > -1) {
            Game.ctx.drawImage(this.err_img[this.err_i], this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        } else {
            Game.ctx.drawImage(this.img, this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
        }
        this.fireAni.draw();
        Game.ctx.restore();
    };
    resetPos () {
        this.x = Size.gameWidth / 2;
        this.y = Size.gameHeight - this.h / 2 - 15;
        this.drawx = this.x - this.w / 2;
        this.drawy = this.y - this.h / 2;
        this.tailY = this.y + this.h / 2 - 6;
        this.fireAni.x = this.x + 0.3;
        this.fireAni.y = this.tailY + 6;
    };
    setErr () {
        this.err_i = 0;
    };
    setDeg (a) {
        this.deg = a;
    };
    setTarget (a) {
        this.target = a;
    };
    clear () {
        if (!this.isClear && !Game.isStop && !Game.isPause) {
            if (this.setProtect()) {
                this.isClear = true;
            }
        }
    };
    die () {
        Game.isStop = true;
        showInfo('游戏失败');
    };
    setLetterNum (a) {
        if (a == undefined) {
            this.letterNum++;
        } else {
            this.letterNum = a;
        }
        J.id('letterNum').txt(this.letterNum);
    };
    setScore (a) {
        if (a == undefined) {
            this.score++;
        } else {
            this.score = a;
        }
        J.id('score').txt(this.score);
        if (this.score > this.bestScore) {
            this.setBestScore(this.score);
        }
    };
    setBestScore (score) {
        this.bestScore = score;
        J.id('bestScore').txt(score);
        localStorage.setItem('_typeBestScore', score);
    }
    setProtect (a) {
        if (a == undefined) {
            if (this.protect > 0) {
                this.protect--;
                J.id('protect').txt(this.protect);
                return true;
            } else {
                this.setErr();
                showInfo('护盾已用完', true, 1000);
            }
        } else {
            this.protect = a;
            J.id('protect').txt(this.protect);
        }
        return false;
    };
    restart () {
        this.setLetterNum(0);
        this.setScore(0);
        this.setProtect(3);
        this.err_i = -1;
        this.deg = 0;
        this.target = null;
        this.isClear = false;
        this.clearIndex = 0;
    };
}