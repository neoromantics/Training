import { Todo } from "../App";

interface Props {
  todo: Todo;
  selectItem: (id: string) => void;
}
const ListItem = ({ todo, selectItem }: Props) => {
  return (
    <div className="list-item">
      <input
        type="checkbox"
        checked={todo.selected}
        onChange={() => selectItem(todo.id)}
      />
      <p>{todo.title}</p>
    </div>
  );
};

export default ListItem;
