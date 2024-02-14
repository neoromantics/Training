const express = require("express");
const todoController = require("./todoController");
require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.post("/todos", todoController.createTodo);
app.get("/todos", todoController.getAllTodos);
app.get("/todos/:id", todoController.getTodoById);
app.put("/todos/:id", todoController.updateTodo);
app.delete("/todos/:id", todoController.deleteTodo);

app.listen(port, () => {
  console.log(`Todo app backend listening at http://localhost:${port}`);
});
