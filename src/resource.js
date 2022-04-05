/*
 * @Author: tackchen
 * @Date: 2021-11-17 15:21:25
 * @LastEditors: tackchen
 * @FilePath: \type\src\resource.js
 * @Description: Coding something
 */

let player_img, player_err_img, enemy_img, bullet_img, die_img, fire_img;

export function getPlayerImg () {
    return player_img;
}
export function getPlayerErrImg () {
    return player_err_img;
}
export function getEnemyImg () {
    return enemy_img;
}
export function getBulletImg () {
    return bullet_img;
}
export function getDieImg () {
    return die_img;
}
export function getFireImg () {
    return fire_img;
}

export function initResources () {
    
    player_img = new Image();
    player_img.src = 'https://cdn.jsdelivr.net/gh/theajack/type/docs/images/player.png';
    player_err_img = new Array();
    for (let i = 0; i < 2; i++) {
        player_err_img[i] = new Image();
        player_err_img[i].src = 'https://cdn.jsdelivr.net/gh/theajack/type/docs/images/player_err' + (i + 1) + '.png';
    }
    player_err_img[2] = player_err_img[1];
    player_err_img[3] = player_err_img[1];
    player_err_img[4] = player_err_img[1];
    player_err_img[5] = player_err_img[0];
    enemy_img = new Array();
    for (let i = 0; i < 4; i++) {
        enemy_img[i] = new Image();
        enemy_img[i].src = 'https://cdn.jsdelivr.net/gh/theajack/type/docs/images/enemy' + (i + 1) + '.png';
    }
    die_img = new Array();
    for (let i = 0; i < 4; i++) {
        die_img[i] = new Image();
        die_img[i].src = 'https://cdn.jsdelivr.net/gh/theajack/type/docs/images/bomb' + (i + 1) + '.png';
    }
    fire_img = new Array();
    for (let i = 0; i < 3; i++) {
        fire_img[i] = new Image();
        fire_img[i].src = 'https://cdn.jsdelivr.net/gh/theajack/type/docs/images/tail' + (i) + '.png';
    }
    fire_img[3] = fire_img[1];
    fire_img[4] = fire_img[0];
    bullet_img = new Image();
    bullet_img.src = 'https://cdn.jsdelivr.net/gh/theajack/type/docs/images/bullet.png';
}