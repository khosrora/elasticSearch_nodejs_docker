const AllRoutes = require('express').Router();
const { indicesRoutes } = require('./indices.routes');
const { blogRoutes } = require('./blog.routes');


AllRoutes.use("/index", indicesRoutes)
AllRoutes.use("/blog", blogRoutes)

module.exports = {
    AllRoutes
}