import React from "react";
import ListItem from "./ListItem";
import { Todo } from "../App";

interface Props {
  todos: Todo[];
  selectItem: (id: string) => void;
  selectAll: (selectAll: boolean) => void;
}

const List = ({ todos, selectItem, selectAll }: Props) => {
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    selectAll(event.target.checked);
  };

  return (
    <div>
      <div className="select-all-container">
        <input
          type="checkbox"
          id="select-all"
          onChange={handleSelectAll}
          checked={todos.every((todo) => todo.selected)}
        />
        <label htmlFor="select-all" className="select-all-checkbox"></label>
        <label htmlFor="select-all">Select All</label>
      </div>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} selectItem={selectItem} />
      ))}
    </div>
  );
};

export default List;
