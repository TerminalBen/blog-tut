/////////////////////////////////////////////////////////////////////////////////basic server

const http = require('http')

const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
    console.log(req.url,req.method);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
    
})

/////////////////////////////////////////////////////////////////////////////////request
// const axios = require('axios')

// axios
//     .get('https://abola.pt')
//     .then(res => {
//         console.log(`statusCode: ${res.status}`)
//         console.log(res)
//     })
//     .catch(error => {
//         console.error(error)
//     })


// axios
//     .post('https://whatever.com/todos', {
//         todo: 'Buy the milk'
//     })
//     .then(res => {
//         console.log(`statusCode: ${res.status}`)
//         console.log(res)
//     })
//     .catch(error => {
//         console.error(error)
//     })


