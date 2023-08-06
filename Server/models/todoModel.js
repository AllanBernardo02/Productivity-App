const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
