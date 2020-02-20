
function Shape(color) {
    this.color = color
}

Shape.prototype.duplicate = function(param) {
    console.log('duplicate shape ' + (param || ''))
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.  radius = radius
}

extend(Circle, Shape)

Circle.prototype.duplicate = function() {
    // Shape.prototype.duplicate.call(this, ' shape')
    // Circle.prototype.__proto__.duplicate.call(this, ' circle prototype')

    console.log('duplicate circle')
}

function Square(size) {
    this.size = size
}

extend(Square, Shape)

Square.prototype.duplicate = function() {
    console.log(`duplicate square`);
}

const shapes = [
    new Square(1),
    new Circle(1),
    new Square(1),
    new Circle(1),
    new Square(1),
]

for (let shape of shapes) shape.duplicate()

function mixin(target, ...sources) {
    Object.assign(target.prototype, ...sources)
}


const canEat = {
    eat: function() {
        this.hunger--
        console.log('eating')
    }
}

const canWalk = {
    walk: function() {
        console.log('walking');
    }
}

const canSwim = {
    swim: function() {
        console.log('swimming')
    }
}

function Person() {}
mixin(Person, canEat, canWalk)

function Shark() {}
mixin(Shark, canEat, canSwim)

const unTigan = new Person()
const randomShark = new Shark()

