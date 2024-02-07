import { useState } from "react";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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

  return (
    <div className="lists-container">
      <div className="list" /* Added class for styling */>
        <List
          todos={todos.filter((todo) => todo.list === "LEFT")}
          selectItem={selectItem}
        />
      </div>
      <div className="list" /* Added class for styling */>
        <List
          todos={todos.filter((todo) => todo.list === "RIGHT")}
          selectItem={selectItem}
        />
      </div>
    </div>
  );
}

export default App;
