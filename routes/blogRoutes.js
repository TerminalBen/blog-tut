const express = require('express')
const router = express.Router();
//const Blog = require('../models/blog') //dont need this anymore. we are handling it in the blog controller.
const blogController = require ('../controllers/blogController')

router.get('/',blogController.blog_index)
//router.get('', blogController.blog_index)

router.get('/create', blogController.blog_create)

router.get('/:id',blogController.blog_details)

//return instead of redirect because we handle the delete as AJAX instead of a form. see ajax request and server responses
router.delete('/:id', blogController.blog_delete)

router.post('', blogController.blog_post)

// app.get('/blogs/*', (req, res) => {
//     res.status(404).render('404', { title: 'NotFound' });
// })

module.exports = router;