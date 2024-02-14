const Todo = require("./todo");

exports.getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
};

exports.addTodo = async (req, res) => {
  let todo = new Todo(req.body);
  todo = await todo.save();
  res.send(todo);
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo)
      return res.status(404).send("The todo with the given ID was not found.");
    res.send(todo);
  } catch (error) {
    res.status(404).send("The todo with the given ID was not found.");
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!todo)
      return res.status(404).send("The todo with the given ID was not found.");
    res.send(todo);
  } catch (error) {
    res.status(404).send("The todo with the given ID was not found.");
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    if (!todo)
      return res.status(404).send("The todo with the given ID was not found.");
    res.send(todo);
  } catch (error) {
    res.status(404).send("The todo with the given ID was not found.");
  }
};
