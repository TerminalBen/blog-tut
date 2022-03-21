const express = require('express') //express
const morgan = require('morgan') //logger
const mongoose = require ('mongoose') //db
const Blog = require('./models/blog')

const app = express()

const dbURI = 'mongodb+srv://bento:mongoauth@cluster0.xzih7.mongodb.net/cluster0?retryWrites=true&w=majority'; //db uri

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { console.log('connected to db'); 
                        app.listen(3000); 
                    })
    .catch((err) =>{console.log(`Error: ${err}`)
    });

app.set('view engine','ejs'); //set up to use ejs files
app.set('views', __dirname+'/templates'); //by default express looks for a folder called views. but ours is called templates

//MongoAuth = {bentolima100@gmail.com:'mk15lcd-mongo',bento:'mongoauth'}



const blogs = [{ title: 'something1', snippet: 'If the Auto Attach feature is enabled, the Node debugger auto' },
    { title: 'something2', snippet: 'There are three modes for auto attach, which you can select in the resulting Quick Pick' },
    { title: 'something3', snippet: ' TypeScript, and many other languages that are transpiled into JavaScript. Setting up a project for Node.js debugging is straightforward with VS Code' },
    ]

//middleware & static files
app.use(express.static('public'))
app.use(morgan('dev'));

app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title:'newest blog',
        snippet:'about the newest',
        body:'content of the newest',
    });
    blog.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/',(req,res)=>{
    //res.sendFile('./templates/index.html', { root: __dirname });
    res.render('index',{title:'Home',blogs});
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
    //res.sendFile('./templates/about.html', { root: __dirname });
})

// app.get('/404', (req, res) => {
//     //res.status(404).sendFile('./templates/404.html', { root: __dirname });
//     res.status(404).render('404')
// })

app.get('/blogs/create',(req,res)=>{
    res.render('create', { title: 'Create' });
})
app.get('*', (req, res) => {
    //res.redirect('404')
    res.status(404).render('404', { title: 'NotFound' });
})