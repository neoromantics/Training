import { Todo } from "../App";

interface Props {
  todo: Todo;
  selectItem: (id: string) => void;
}

const ListItem = ({ todo, selectItem }: Props) => {
  const handleItemClick = () => {
    selectItem(todo.id);
  };

  return (
    <div
      className={`list-item ${todo.selected ? "selected" : ""}`}
      onClick={handleItemClick}
    >
      <span className="checkmark"></span>
      <p>{todo.title}</p>
    </div>
  );
};

export default ListItem;
