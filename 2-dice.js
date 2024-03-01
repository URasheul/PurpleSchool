

'use strict'

let cube = 'd8'

function randomFace(dice){
    const faceNumber = Number(dice.match(/\d+/g))
    const result = Math.floor(Math.random() * faceNumber + 1 )
    return result;
}

randomFace(cube);