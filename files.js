const fs = require('fs')
const content ='omething'
const othre_content = 'other content'

// const write_file = fs.writeFileSync('test.txt',content,err=>{
//     if (err){
//         console.log(err)
//         return
//     }
// })

// const append = fs.appendFile('test.txt',othre_content,err=>{
//     if (err){
//         console.log(err)
//         return
//     }
// })


const readfile = fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

const readStream = fs.createReadStream('test.txt');
readStream.on('data',(chunk)=>{
    //console.log(chunk)
})

const writestream = fs.createWriteStream('test2.txt')
readStream.pipe(writestream)