const express = require("express");
const router = express.Router()

const Blog = require('../models/blog')

router.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'newest blog4',
        snippet: 'about the newest',
        body: 'content of the newest',
    });
    blog.save().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
    })
})


router.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
})


router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.json(result)
        })
})

router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndRemove(id)
        .then(() => {
            console.log('Delete success')
            res.redirect('/api/blogs')
        })
        .catch((err) => { console.log(err) })
})

router.get('/*', (req, res) => {
    res.sendStatus(404);
})


module.exports = router;