const router = require('express').Router();
const commentRoutes = require("./comment-routes");
const userRoutes = require('./user-routes');
const blogRoutes = require("./blog-routes");

router.use('/users', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
