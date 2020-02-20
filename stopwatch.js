
function Stopwatch() {
    let isRunning = false
    let duration = 0
    let interval

    this.start = function() {
        if (isRunning)
            throw new Error('Stopwatch already started')

        isRunning = true
        interval = setInterval(_=> duration += 0.01, 10)
    }

    this.stop = function() {
        if (!isRunning)
            throw new Error('Stopwatch already stopped')

        isRunning = false
        clearTimeout(interval)
    }

    this.reset = function() {
        isRunning = false
        clearTimeout(interval)
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return `${duration.toFixed(2)} seconds`
        }
    })
}

const stopwatch = new Stopwatch()

