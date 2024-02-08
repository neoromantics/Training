import { Todo } from "../App";
import ListItem from "./ListItem";

interface Props {
  todos: Todo[];
  selectItem: (id: string) => void;
  selectAll: () => void;
}

const List = ({ todos, selectItem, selectAll }: Props) => {
  return (
    <div className="list-container">
      {" "}
      {/* Wrap the list with .list-container */}
      <div className="list-title">
        {" "}
        {/* Use .list-title for the select all section */}
        <label>
          select all
          <input
            type="checkbox"
            checked={todos.length !== 0 && todos.every((todo) => todo.selected)}
            onChange={selectAll}
          />
        </label>
      </div>
      <ul>
        {" "}
        {/* Remove the .todo-list class if it's not defined in the CSS */}
        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            {" "}
            {/* Update each list item with .list-item */}
            <ListItem todo={todo} selectItem={selectItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
