const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

class Sprite {
    constructor({position, velocity, offset}) {
        this.position = position
        this.velocity = velocity
        this.offset = offset
    }
}
