import { Todo } from "../App";

interface Props {
  todo: Todo;
  selectItem: (id: string) => void;
}

const ListItem = ({ todo, selectItem }: Props) => {
  const handleItemClick = () => {};

  return (
    <>
      <input
        type="checkbox"
        onChange={() => selectItem(todo.id)}
        checked={todo.selected}
        onClick={handleItemClick}
      />
      <span>{todo.title}</span>
    </>
  );
};

export default ListItem;
