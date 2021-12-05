const fs = require('fs')

function callback(error, data) {
    if (error) {
        return console.log('Error occurred. ', error)
    } else {
        console.log('File read.')
        const depth = data.split('\n')
        depth.forEach((element, index, table) => {
            table[index] = Number(element)
        });
        let before = depth[0] + depth[1] + depth[2]
        console.log(before, depth[0], depth[1], depth[2])
        let total = 0
        for (let i = 1; i < depth.length - 1; i++) {
            if ((depth[i - 1] + depth[i] + depth[i + 1]) > before) {
                total++
                // console.log((depth[i - 1] + depth[i] + depth[i + 1]) > before)
                // if (i === 10) return
            }
            before = depth[i - 1] + depth[i] + depth[i + 1]
        }
        console.log(total)
    }
}

fs.readFile('./data', 'utf8', callback);