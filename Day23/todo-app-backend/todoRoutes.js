const express = require("express");
const router = express.Router();
const todoController = require("./todoController");

router.get("/", todoController.getAllTodos);
router.post("/", todoController.addTodo);
router.get("/:id", todoController.getTodoById);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
