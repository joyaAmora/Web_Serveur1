const fs = require('fs')
const dir = './a/b/c/d'
const option = {
    recursive: true}

const callback = (err) => {
    if(err)
        console.log(err)
    else
        console.log('repertoire créée')
}

fs.mkdir(dir, option, callback)

setTimeout(() => {
    fs.rmdir('./a', option, err => {
        if(err)
            console.log(err)
        else
            console.log('deleted')
    } )
}, 5000)