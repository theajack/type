/*
 * @Author: tackchen
 * @Date: 2021-11-17 14:53:04
 * @LastEditors: tackchen
 * @FilePath: \type\src\util.js
 * @Description: Coding something
 */
import J from 'jetterjs';

let showInfoTimer = null;
export function showInfo (a, b, c) {
    if (b == true) {
        c = J.checkArg(c, 2000);
        J.id('showInfo').txt(a).fadeIn(function () {
            clearTimeout(showInfoTimer);
            showInfoTimer = setTimeout(function () {
                hideInfo();
            },
            c);
        });
    } else {
        J.id('showInfo').txt(a).fadeIn();
    }
}

export function hideInfo () {
    J.id('showInfo').fadeOut(null, 200);
}

export function countDis (a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}