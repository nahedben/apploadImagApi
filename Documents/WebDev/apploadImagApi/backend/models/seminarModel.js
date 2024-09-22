const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  status: { type: String, enum: ["Dr.", "A/Pr.", "Pr."] },
});

const seminarSchema = new Schema(
  {
    subject: { type: String, required: true },
    speaker: { type: speakerSchema, required: true },
    abstract: { type: String, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Seminar", seminarSchema);
