const fs = require('fs')

fs.open('text.txt', (err, fd) => {
    if(err)
        console.log(err)
    fs.close(fd, err => {
        if(err)
        console.log(err)
    })
})

const data = Buffer.from('Hello World')
fs.writeFile('text.txt', data, err => {
    if(err)
        console.log(err)
})
fs.readFile("text.txt", "utf8", (err, data) => {
    if(err)
        console.log(err)
    else
        console.log(data)
})