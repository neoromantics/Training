import { Todo } from "../App";
import ListItem from "./ListItem";

interface Props {
  todos: Todo[];
  selectItem: (id: string) => void;
  selectAll: () => void;
}

const List = ({ todos, selectItem, selectAll }: Props) => {
  return (
    <ul className="todo-list">
      <div className="select-all">
        <label>
          select all
          <input
            type="checkbox"
            checked={todos.length !== 0 && todos.every((todo) => todo.selected)}
            onChange={selectAll}
          />
        </label>
      </div>

      {todos.map((todo) => (
        <li key={todo.id} className="todo-list-item">
          <ListItem todo={todo} selectItem={selectItem} />
        </li>
      ))}
    </ul>
  );
};

export default List;
