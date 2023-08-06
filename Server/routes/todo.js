const express = require("express");

const router = express.Router();

const { createTodo, getTodo, deleteTodo } = require("../controllers/todo.js");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
