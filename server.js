const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');


const sequelize = require('./config/connection');
const { Blog } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.get("/", async (req,res) => {
    const allBlogs = await Blog.findAll()
    const blogs = allBlogs.map((blog) => 
    blog.get({plain:true}))
    res.render("homepage",{
        blogs
    })
})




sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  