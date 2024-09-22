const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  _id: { type: "UUID", required: true },
  first_name: { type: String, required: true },
});
const bookSchema = new Schema(
  {
    title: {
      type: String,
      requires: true,
    },
    author: { type: authorSchema, required: true },
    pages: { type: Number, required: true },
    genre: { type: [] },
    rating: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
