
class Circle {
    constructor(radius) {
        this.radius = radius
    }
    
    draw() {
        console.log('draw')
    }

    static parse(str) {
        const radius = JSON.parse(str).radius
        return new Circle(radius)
    }  
}

const circle = Circle.parse('{ "radius": 1 }')
console.log(circle)

'use strict'

const Circle = function() {
    this.draw = function() { console.log(this) }
}

const c = new Circle()
const draw = c.draw
draw()

const _radius = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius) {
        this[_radius] = radius
    }
    [_draw]() {
        console.log('draw')
    }
}

const c = new Circle(1)

const _radius = new WeakMap()
const _privateProps = new WeakMap()

class  Circle {
    constructor(radius) {
        _radius.set(this, radius)
        _privateProps.set(this, {
            prop1: 'prop1',
            prop2: 'prop2'
        })
    }

    get radius() {
        return _radius.get(this)
    }

    set radius(value) {
        if (value <= 0) throw new Error('invalid radius')

        _radius.set(this, value)
    }
}

const c = new Circle(10)
console.log(c.radius)

class Shape {
    constructor(color) {
        this.color = color
    }

    move() {
        console.log('move shape')
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color)
        this.radius = radius
    }

    draw() {
        console.log('draw')
    }

    move() {
        super.move()
        console.log('move circle')
    }
}

class Square extends Shape {
    constructor(color) {
        super(color)
    }

    move() {
        super.move()
        console.log('move circle')
    }
}

const c = new Circle('red', 10)
const sq = new Square('blue')

const _items = new WeakMap()

class Stack {
    constructor() {
        _items.set(this, [])
    }

    get count() {
        return _items.get(this).length
    }

    isEmpty() {
        return this.count === 0
    }
    
    push(obj) {
        _items.get(this).push(obj)
    }

    pop() {
        if (this.isEmpty()) 
            throw new Error('Stack is empty')

        return _items.get(this).pop()
    }

    peek() {
        if (this.isEmpty()) 
            throw new Error('Stack is empty')

        return _items.get(this).unshift()
    }
}

const stack = new Stack()