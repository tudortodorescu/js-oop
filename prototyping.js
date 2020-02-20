
let person = { name: 'Tudor' }

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

person.name = 'John'
console.log(person);
console.log(Object.keys(person));

delete person.name
console.log(person)

let objectBase = Object.getPrototypeOf(person)
let descriptor1 = Object.getOwnPropertyDescriptor(objectBase, 'toString')
let descriptor2 = Object.getOwnPropertyDescriptor(person, 'name')

console.log(descriptor1)
console.log(descriptor2)

const start = new Date().getTime() 

function Circle(radius) {
    // Instance members
    this.radius = Math.round(radius / Math.random(0, radius), 2)

    // this.draw = function() {
    //     console.log('draw');
    // }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw');
}

const circles = []
let i = 0
while (true) {
    if (i === 10**3) break
    circles.push(new Circle(i))
    i++
}

Circle.prototype.toString = function() {
    return `Circle with radius ${this.radius}`
}

circles

console.log(new Date().getTime() - start)


function Stopwatch() {
    let isRunning = false
    let duration = 0
    let interval

    Object.defineProperty(this, 'duration', {
        get: function() { return `${duration.toFixed(2)} seconds` },
        set: function(value) { duration = value }
    })
    Object.defineProperty(this, 'isRunning', {
        get: function() { return isRunning }
    })
    Object.defineProperty(this, 'interval', {
        get: function() { return interval }
    })
}

Stopwatch.prototype.start = function() {
    if (this.isRunning)
        throw new Error('Stopwatch already started')

    this.isRunning = true
    this.interval = setInterval(_=> duration += 0.01, 10)
}

Stopwatch.prototype.stop = function() {
    if (!this.isRunning)
        throw new Error('Stopwatch already stopped')

    this.isRunning = false
    clearTimeout(this.interval)
}

Stopwatch.prototype.reset = function() {
    this.isRunning = false
    clearTimeout(this.interval)
    duration = 0
}


const start = new Date().getTime() 

const stopWatches = []
let i = 0
while (true) {
    if (i === 10**1) break
    stopWatches.push(new Stopwatch())
    i++
}

console.log(new Date().getTime() - start)