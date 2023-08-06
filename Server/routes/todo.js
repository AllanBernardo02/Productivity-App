const express = require("express");

const router = express.Router();

const { createTodo, getTodo } = require("../controllers/todo.js");

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

module.exports = router;
