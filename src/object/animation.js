import J from 'jetterjs';

export class Animation {
    constructor (option) {
        this.index = 0;
        this.img = J.checkArg(option.img, null);
        this.call = J.checkArg(option.call, null);
        this.singleCall = J.checkArg(option.singleCall, null);
        this.per = J.checkArg(option.per, 1);
        this.max = J.checkArg(option.max, (this.img == null) ? 100 : this.img.length);
        this.loop = J.checkArg(option.loop, true);
        this.isActive = true;
        this.pos = J.checkArg(option.pos, null);
        this.size = J.checkArg(option.size, null);
        this.x = J.checkArg(option.x, 0);
        this.y = J.checkArg(option.y, 0);
        this.w = J.checkArg(option.w, 0);
        this.h = J.checkArg(option.h, 0);
        this.host = J.checkArg(option.host, null);
        this.ctx = J.checkArg(option.ctx, null);
    }
    act () {
        if (this.isActive) {
            this.resetPosAndSize();
            if (this.index >= this.max - 1) {
                this.index = 0;
                if (this.call != null)
                    this.call(this);
                if (this.loop == false)
                    this.inactive();
            } else {
                this.index += this.per;
            }
            if (this.singleCall != null)
                this.singleCall(this);
        }
    }
    active () {
        this.isActive = true;
    }
    inactive () {
        this.isActive = false;
    }
    draw () {
        this.ctx.drawImage(this.img[this.index], this.x - this.w / 2, this.y - this.h / 2, this.w, this.h);
    }
    resetPosAndSize () {
        if (this.size != null) {
            if (this.pos.constructor == Function) {
                this.size(this);
            } else {
                this.w = this.size[this.index][0];
                this.h = this.size[this.index][1];
            }
        }
        if (this.pos != null) {
            if (this.pos.constructor == Function) {
                this.pos(this);
            } else {
                this.x = this.pos[this.index][0];
                this.y = this.pos[this.index][1];
            }
        }
    }
};