const mongoose = require("mongoose");
const Book = require("../models/bookModel");

// get al books
const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createAt: -1 });

  res.status(200).json(books);
};
module.exports = { getBooks };
//create books
const createBook = async (req, res) => {
  console.log("creating book");
};

// get one book
const getOneBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) {
    return res.status(400).json({ msg: "Not a such book id" });
  }
  if (book) {
    res.status(200).json(book);
  }
};

// Edit one book
const editBook = async (req, res) => {
  console.log("editing one book by id");
};

// Removing a book

const removeBook = async (req, res) => {
  console.log("removing a book by id");
};
