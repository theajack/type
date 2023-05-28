/*
 * @Author: tackchen
 * @Date: 2021-11-17 15:14:34
 * @LastEditors: Please set LastEditors
 * @FilePath: \type\src\store.js
 * @Description: Coding something
 */

export const Size = {
    gameWidth: 0,
    gameHeight: 0,
};

export const Game = {
    canvas: null,
    ctx: null,
    player: null,
    enemys: [],
    bullets: [],
    addEnemyTime: 4000,
    isStop: false,
    isPause: false,
    bgMoveAni: null,
    loopIndex: 0,
};

export const Const = {
    LoopTime: 16,
};