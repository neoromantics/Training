import { Todo } from "../App";
import ListItem from "./ListItem";

interface Props {
  todos: Todo[];
  selectItem: (id: string) => void;
}

const List = ({ todos, selectItem }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <ListItem todo={todo} selectItem={selectItem} />
        </li>
      ))}
    </ul>
  );
};

export default List;
