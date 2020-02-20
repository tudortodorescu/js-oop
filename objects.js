
console.log('hello world')

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw')
        }
    }
}

const circle = createCircle(10)

function isNullOrUndefined(value) {
    return value !== undefined && value !== null
}

function Circle(radius) {
    this.radius = radius
    
    let defaultLocation = { x: 0, y: 0 }

    const computeOptimumLocation = function() {
        console.log('computeOptimumLocation', defaultLocation);
    }

    this.getDefaultLocation = function() {
        return defaultLocation
    }

    this.draw = function() {
        computeOptimumLocation()
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation
        },
        set: function(value) {
            if (!isNullOrUndefined(value.x) && !isNullOrUndefined(value.y))
                throw new Error('Invalid location')

            defaultLocation = value
        }

    })
}

const another = new Circle(20)
another.defaultLocation = {x: 0, y: 2}

circle.location = { x: 1 }

const propertyName = 'center location'
circle[propertyName] = { y: 1 }

circle[JSON.stringify(circle)] = { z: 1 }

for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log('key', key)

    if (key.includes('{'))
        console.log(JSON.parse(key))
}

const keys = Object.keys(circle)
console.log(keys)

console.log(keys.includes('radius'))
console.log('radius1' in circle)
