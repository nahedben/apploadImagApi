const express = require("express");
const router = express.Router();

const {
  getBooks,
  createBook,
  getOneBook,
  editBook,
  removeBook,
} = require("../controllers/book.controllers");

//get all books
router.get("/", getBooks);

module.exports = router;
