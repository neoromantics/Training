import { Todo } from "../App";

interface Props {
  todo: Todo;
  selectItem: (id: string) => void;
}
const ListItem = ({ todo, selectItem }: Props) => {
  return (
    <>
      <input
        type="checkbox"
        checked={todo.selected}
        onChange={() => selectItem(todo.id)}
      />
      <title>{todo.title}</title>
      {todo.title}
    </>
  );
};

export default ListItem;
