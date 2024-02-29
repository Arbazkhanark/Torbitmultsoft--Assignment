const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hobby: {
    type: [String],
    required: true
  },
  files: {
    type: [String]
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
