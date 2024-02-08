import { Todo } from "../App";
import ListItem from "./ListItem";

interface Props {
  todos: Todo[];
  selectItem: (id: string) => void;
  selectAll: () => void;
}

const List = ({ todos, selectItem, selectAll }: Props) => {
  return (
    <ul>
      <label>
        select all
        <input
          type="checkbox"
          checked={todos.length !== 0 && todos.every((todo) => todo.selected)}
          onChange={selectAll}
        />
      </label>
      {todos.map((todo) => (
        <li key={todo.id}>
          <ListItem todo={todo} selectItem={selectItem} />
        </li>
      ))}
    </ul>
  );
};

export default List;
