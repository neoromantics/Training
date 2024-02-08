import { Todo } from "../App";

interface Props {
  todo: Todo;
  selectItem: (id: string) => void;
}
const ListItem = ({ todo, selectItem }: Props) => {
  return (
    <div className="list-item">
      {" "}
      {/* This class is correctly applied */}
      <input
        type="checkbox"
        checked={todo.selected}
        onChange={() => selectItem(todo.id)}
      />
      <p>{todo.title}</p> {/* Replace <title> with <p> or a heading tag */}
    </div>
  );
};

export default ListItem;
