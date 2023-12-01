const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
  docType: {
    type: String,
    required: true,
  },
  //The rest of the variables go here
});

const Document = mongoose.model("document", DocumentSchema);
module.exports = { Document };
