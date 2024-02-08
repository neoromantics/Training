import ListItem from "./ListItem";
import { Todo } from "../App";

interface Props {
  todos: Todo[];
  selectItem: (id: string) => void;
  selectAll: () => void;
}

const List = ({ todos, selectItem, selectAll }: Props) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={selectAll}
        checked={todos.length !== 0 && todos.every((todo) => todo.selected)}
      />
      <label>Select All</label>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} selectItem={selectItem} />
      ))}
    </div>
  );
};

export default List;
