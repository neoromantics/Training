import { useState } from "react";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LeftButton from "./components/LeftButton";
import RightButton from "./components/RightButton";

export interface Todo {
  id: string;
  title: string;
  selected: boolean;
  list: "LEFT" | "RIGHT";
}

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "title 1",
    selected: false,
    list: "LEFT",
  },
  {
    id: "2",
    title: "title 2",
    selected: false,
    list: "LEFT",
  },
  {
    id: "3",
    title: "title 3",
    selected: false,
    list: "RIGHT",
  },
  {
    id: "4",
    title: "title 4",
    selected: false,
    list: "RIGHT",
  },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const selectItem = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, selected: !todo.selected } : todo
      )
    );
  };

  const selectAll = (list: "LEFT" | "RIGHT") => {
    let result =
      list === "LEFT"
        ? todos
            .filter((todo) => todo.list === "LEFT")
            .every((todo) => todo.selected)
          ? todos.map((todo) =>
              todo.list === "LEFT" ? { ...todo, selected: false } : todo
            )
          : todos.map((todo) =>
              todo.list === "LEFT" ? { ...todo, selected: true } : todo
            )
        : todos
            .filter((todo) => todo.list === "RIGHT")
            .every((todo) => todo.selected)
        ? todos.map((todo) =>
            todo.list === "RIGHT" ? { ...todo, selected: false } : todo
          )
        : todos.map((todo) =>
            todo.list === "RIGHT" ? { ...todo, selected: true } : todo
          );

    setTodos(result);
  };

  const moveLeft = () => {
    setTodos(
      todos.map((todo) =>
        todo.list === "RIGHT" && todo.selected
          ? { ...todo, list: "LEFT", selected: false }
          : todo
      )
    );
  };

  const moveRight = () => {
    setTodos(
      todos.map((todo) =>
        todo.list === "LEFT" && todo.selected
          ? { ...todo, list: "RIGHT", selected: false }
          : todo
      )
    );
  };

  return (
    <div className="app-container">
      <div className="list-container">
        <List
          todos={todos.filter((todo) => todo.list === "LEFT")}
          selectItem={selectItem}
          selectAll={() => selectAll("LEFT")}
        />
      </div>
      <div className="button-container">
        <LeftButton moveLeft={moveLeft} />
        <RightButton moveRight={moveRight} />
      </div>
      <div className="list-container">
        <List
          todos={todos.filter((todo) => todo.list === "RIGHT")}
          selectItem={selectItem}
          selectAll={() => selectAll("RIGHT")}
        />
      </div>
    </div>
  );
}

export default App;
