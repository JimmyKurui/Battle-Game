class Sprite {
    constructor({position, velocity, color='red', offset}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 100
        this.color = color
        this.lastKey
        this.isAttacking = false
        this.attackBox = {
            position : {
                x: this.position.x,
                y: this.position.y
            },
            width : 100,
            height : 50,
            offset,
            color : 'green'
        }
        this.health = 100
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        // Weapon
        if (this.isAttacking) {
            c.fillStyle = this.attackBox.color
            c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }

    update() {
        this.draw()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else { 
            this.velocity.y += gravity
        }
    }
}