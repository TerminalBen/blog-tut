const express = require("express");
const router = express.Router()

//const Blog = require('../models/blog')
const apiController = require('../controllers/apiController')

router.get('/',apiController.get_blogs)

router.get('/add-blog', apiController.add_blog)

router.get('/blogs', apiController.get_blogs)

router.get('/blogs/:id', apiController.get_single_blog)

router.delete('/blogs/:id', apiController.delete_single_blog)

router.get('/*', apiController.api_404)


module.exports = router;