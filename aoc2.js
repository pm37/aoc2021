const fs = require('fs')

function callback(error, data) {
    if (error) {
        return console.log('Error occurred. ', error)
    } else {
        console.log('File read.')
        const moves = data.split('\n')
        let hor = 0
        let depth = 0
        let aim = 0
        for (let move of moves) {
            let value = Number(move.split(' ')[1].replace('\n', ''))
            if (move.startsWith('forward')) {
                hor += value
                depth += (value * aim)
            }
            else if (move.startsWith('up')) {
                aim -= value
            }
            else if (move.startsWith('down')) {
                aim += value
            }
        }
        console.log(hor, depth, hor * depth)
    }
}

fs.readFile('./data', 'utf8', callback);