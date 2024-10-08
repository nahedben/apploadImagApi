// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send(`<h3>Hello there</h3>`);
// });
// // const url = "mongodb://127.0.0.1:27017/bookstore";
// const PORT = 4000;
// mongoose.connect("mongodb://127.0.0.1:27017/bookstore");
// // mongoose.connect(process.env.URI);
// //check if there is a problem
// const db = mongoose.connection;
// db.once("open", (_) => {
//   console.log("Database connected");
// });

// db.on("error", (err) => {
//   console.error("connection error:", err);
// });
// app.listen(PORT, () => {
//   console.log("app is listening on port: ", PORT);
// });
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bookRoutes = require("./routes/book.routes");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// app.get("/", (req, res) => {
//   res.send(`<h2>Hi the app is starting</h2>`);
// });
app.use("/api/books", bookRoutes);

// const PORT = 4000;
// const uri = "mongodb://127.0.0.1:27017/bookstore";

mongoose.connect(process.env.URI);
const db = mongoose.connection;
db.once("open", () => {
  console.log("server connected to bookstore db");
});

db.on("error", (err) => {
  console.log("failed to connect error", err);
});

app.listen(process.env.PORT, () => {
  console.log("Server is listening to PORT", process.env.PORT);
});
