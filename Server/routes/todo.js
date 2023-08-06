const express = require("express");

const router = express.Router();

const {
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.js");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.patch("/updateTodo/:id", updateTodo);

module.exports = router;
