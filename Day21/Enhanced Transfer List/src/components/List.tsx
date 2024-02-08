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
      <div className="list-title">
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
        {todos.map((todo) => (
          <li key={todo.id} className="list-item">
            <ListItem todo={todo} selectItem={selectItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
