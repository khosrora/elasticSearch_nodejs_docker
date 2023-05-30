const blogRoutes = require('express').Router();
const { createNewBlog, getAllBlogs, removeBlog, updateBlog, searchByTitle, searchByMultyField, searchByRegex, searchMultyByRegex } = require('../controller/blog.controller');



blogRoutes.post("/create", createNewBlog);
blogRoutes.get("/list/:value?", getAllBlogs);
blogRoutes.delete("/delete/:id", removeBlog);
blogRoutes.put("/update/:id", updateBlog);
blogRoutes.get("/findByTitle", searchByTitle);
blogRoutes.get("/findMultyByTitle", searchByMultyField);
blogRoutes.get("/findMultyByRegex", searchByRegex);
blogRoutes.get("/searchMultyByRegex", searchMultyByRegex);

module.exports = {
    blogRoutes
}