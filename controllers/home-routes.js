const router = require('express').Router();
const { User, Comment, Blog } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      attribute: { exclude: ['password'] },
      include: [{model: User, attributes: ["username"]}],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
