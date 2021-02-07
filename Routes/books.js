const express = require("express");
const routes = express();
let controller = require("./../controller/db");

//Middleware
routes.use(express.json());

//GET
routes.get("/api/v1/books", controller.getAllBook);
routes.get("/api/v1/books/:isbn", controller.getBookById);

//POST
routes.post("/api/v1/books", controller.postNewBook);

//PUT
routes.put("/api/v1/books/:isbn", controller.putBook);

//DELETE
routes.delete("/api/v1/books/:isbn", controller.deleteBook);

module.exports = routes;
