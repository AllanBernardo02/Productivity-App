const { default: mongoose } = require("mongoose");
const todoModel = require("../models/todoModel");

const createTodo = async (req, res) => {
  const { todoName } = req.body;

  try {
    const newTodo = new todoModel({
      todoName,
    });

    await newTodo.save();

    res.status(201).json({
      message: "Todo Created SuccessFully",
      success: true,
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create Todo" });
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await todoModel.find();

    res.status(200).json({
      message: "Successfully Get All User",
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Todo" });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const todo = await todoModel.findByIdAndRemove(id);

    res.status(201).json({
      message: "SuccessFully Deleted Todo Name",
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to Delete Todo" });
  }
};

module.exports = {
  createTodo: createTodo,
  getTodo: getTodo,
  deleteTodo: deleteTodo,
};
