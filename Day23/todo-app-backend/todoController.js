let todos = [];

const createTodo = (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .send({ message: "Title and description are required." });
    }
    const newTodo = { id: todos.length + 1, title, description };
    todos.push(newTodo);
    res.status(201).send(newTodo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred while creating the todo." });
  }
};

const getAllTodos = (req, res) => {
  res.status(200).send(todos);
};

const getTodoById = (req, res) => {
  try {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) {
      return res.status(404).send({ message: "Todo not found" });
    }
    res.status(200).send(todo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred while retrieving the todo." });
  }
};

const updateTodo = (req, res) => {
  try {
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if (!todo) {
      return res.status(404).send({ message: "Todo not found" });
    }

    const { title, description } = req.body;
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;

    res.status(200).send(todo);
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred while updating the todo." });
  }
};

const deleteTodo = (req, res) => {
  try {
    const index = todos.findIndex((t) => t.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).send({ message: "Todo not found" });
    }

    todos.splice(index, 1);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred while deleting the todo." });
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
