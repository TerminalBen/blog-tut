const Blog = require('../models/blog')

const add_blog = ((req, res) => {
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


const get_blogs = ((req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.log(err)
        })
})

const get_single_blog = ((req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.json(result)
        })
})

const delete_single_blog = ((req, res) => {
    const id = req.params.id;
    Blog.findByIdAndRemove(id)
        .then(() => {
            console.log('Delete success')
            res.redirect('/api/blogs')
        })
        .catch((err) => { console.log(err) })
})

const api_404 = ((req, res) => {
    res.sendStatus(404);
})

module.exports = {
    add_blog,
    get_blogs,
    get_single_blog,
    delete_single_blog,
    api_404
}