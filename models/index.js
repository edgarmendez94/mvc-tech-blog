const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

Blog.belongsTo(User, {
    foreignKey:"user_id",
});

User.belongsTo(Blog, {
    foreignKey:"user_id",
    onDelete: "CASCADE"
});



User.hasMany(Comment, {
    foreignKey:"user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey:"user_id",
});


Blog.hasMany(Comment, {
    foreignKey:"blog_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(Blog, {
    foreignKey:"blog_id",
});


module.exports = {Blog,User,Comment};