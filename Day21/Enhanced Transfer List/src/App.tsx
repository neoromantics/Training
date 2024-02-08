import { useState } from "react";
import List from "./List";
import UpButton from "./UpButton";
import DownButton from "./DownButton";

export interface Todo {
  id: string;
  title: string;
  selected: boolean;
  list: "Up" | "Down";
}

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "title 1",
    selected: false,
    list: "Up",
  },
  {
    id: "2",
    title: "title 2",
    selected: false,
    list: "Up",
  },
  {
    id: "3",
    title: "title 3",
    selected: false,
    list: "Down",
  },
  {
    id: "4",
    title: "title 4",
    selected: false,
    list: "Down",
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

  const selectAll = (list: "Up" | "Down") => {
    let result =
      list === "Up"
        ? todos
            .filter((todo) => todo.list === "Up")
            .every((todo) => todo.selected)
          ? todos.map((todo) =>
              todo.list === "Up" ? { ...todo, selected: false } : todo
            )
          : todos.map((todo) =>
              todo.list === "Up" ? { ...todo, selected: true } : todo
            )
        : todos
            .filter((todo) => todo.list === "Down")
            .every((todo) => todo.selected)
        ? todos.map((todo) =>
            todo.list === "Down" ? { ...todo, selected: false } : todo
          )
        : todos.map((todo) =>
            todo.list === "Down" ? { ...todo, selected: true } : todo
          );

    setTodos(result);
  };

  const moveLeft = () => {
    setTodos(
      todos.map((todo) =>
        todo.list === "Down" && todo.selected
          ? { ...todo, list: "Up", selected: false }
          : todo
      )
    );
  };

  const moveDown = () => {
    setTodos(
      todos.map((todo) =>
        todo.list === "Up" && todo.selected
          ? { ...todo, list: "Down", selected: false }
          : todo
      )
    );
  };

  return (
    <div>
      <div>
        <List
          todos={todos.filter((todo) => todo.list === "Up")}
          selectItem={selectItem}
          selectAll={() => selectAll("Up")}
        />
      </div>
      <div>
        <UpButton moveUp={moveLeft} />
        <DownButton moveDown={moveDown} />
      </div>
      <div>
        <List
          todos={todos.filter((todo) => todo.list === "Down")}
          selectItem={selectItem}
          selectAll={() => selectAll("Down")}
        />
      </div>
    </div>
  );
}

export default App;
