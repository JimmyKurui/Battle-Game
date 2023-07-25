const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.3

class Sprite {
    constructor({position, velocity, color='red'}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 100
        this.color = color
        this.isAttacking
        this.AttackBox
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else { 
            this.velocity.y += gravity
        }
    }
}

const player = new Sprite({
    position: {
        x: 100, y: 50
    },
    velocity: {
        x: 0, y: 0
    },
})

const enemy = new Sprite({
    position: {
        x: 300, y: 100
    },
    velocity: {
        x: 0, y: 0
    },
})

console.table([player, enemy])

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    console.log([player.position.y, player.velocity.y])
    enemy.update()
}

animate()