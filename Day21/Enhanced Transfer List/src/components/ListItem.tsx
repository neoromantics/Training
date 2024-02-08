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
      <title>{todo.title}</title>
      {todo.title}
    </div>
  );
};

export default ListItem;
