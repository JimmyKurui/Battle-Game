const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

const gravity = 1
const keys = {
    // p1
    'w' : isPressed = false,
    'a' : isPressed = false,
    's' : isPressed = false,
    'd' : isPressed = false,
    // p2
    'ArrowUp' : isPressed = false,
    'ArrowLeft' : isPressed = false,
    'ArrowDown' : isPressed = false,
    'ArrowRight' : isPressed = false,
}

class Sprite {
    constructor({position, velocity, color='red'}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 100
        this.color = color
        this.isAttacking = false
        this.attackBox = {
            position,
        }
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else { 
            this.velocity.y += gravity
        }
    }
}

const p1 = new Sprite({
    position: {
        x: 100, y: 50
    },
    velocity: {
        x: 0, y: 0
    },
})

const p2 = new Sprite({
    position: {
        x: 300, y: 100
    },
    velocity: {
        x: 0, y: 0
    },
})


// Animation Frame
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    p1.update()
    p2.update()
}

animate()

// Event Listeners
window.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'w':
            p1.velocity.y = -20
            keys.w.isPressed = true
            break
        case 'a':
            p1.velocity.x = -10
            keys.a.isPressed = true
            break
        case 's':
            p1.isAttacking = true
            keys.s.isPressed = true
            break
        case 'd':
            p1.velocity.x = 10
            keys.d.isPressed = true
            break
        // Player 2
        case 'ArrowUp':
            p2.velocity.y -= 20
            keys.ArrowUp.isPressed = true
            break
        case 'ArrowLeft':
            p2.position.x -= 10
            keys.ArrowLeft.isPressed = true
            break
        case 'ArrowDown':
            p2.isAttacking = true
            keys.ArrowDown.isPressed = true
            break
        case 'ArrowRight':
            p2.velocity.x = 10
            keys.ArrowRight.isPressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch(event.key) {
        default:
            p1.velocity.x = 0
            p2.velocity.x = 0
            keys.w.isPressed = false
            keys.a.isPressed = false
            keys.s.isPressed = false
            keys.d.isPressed = false
            keys.ArrowUp.isPressed = false
            keys.ArrowLeft.isPressed = false
            keys.ArrowDown.isPressed = false
            keys.ArrowRight.isPressed = false
            break
    }
})