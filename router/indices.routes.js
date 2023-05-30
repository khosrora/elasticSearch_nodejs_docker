const indicesRoutes = require('express').Router();
const { createNewIndex, getIndices, removeIndex } = require('../controller/indices.controller');


indicesRoutes.post("/create", createNewIndex)
indicesRoutes.get("/list", getIndices)
indicesRoutes.delete("/delete/:indexName", removeIndex)

module.exports = {
    indicesRoutes
}