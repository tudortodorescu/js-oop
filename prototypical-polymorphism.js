
// HtmlElement
// HtmlSelectElement

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function HtmlElement() {
    this.click = function() {
        console.log('clicked')
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focusing')
}

function HtmlSelectElement(items = []) {
    this.items = items

    this.addItem = function(item) {
        this.items.push(item)
    }
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1)
    }
    this.render = function() {
        const renderItem = item => `\t<option>${item}</option>\n`
        return `<select>\n${this.items.map(renderItem).join('')}</select>`
    }
}

HtmlSelectElement.prototype = new HtmlElement()
HtmlSelectElement.prototype.constructor = HtmlSelectElement

function HtmlImageElement(src = '') {
    this.src = src
    this.render = function() {
        return `<img src="${src}" />`
    }
}

HtmlImageElement.prototype = new HtmlElement()
HtmlImageElement.prototype.constructor = HtmlImageElement

const elements = [
    new HtmlSelectElement([1, 2, 3]),
    new HtmlImageElement('http://www.todorescu.com/profile-pic-0x002.jpg')
]

for (let element of elements)
    console.log(element.render())