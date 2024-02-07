interface ListItem {
  id: string;
  description: string;
  isChecked: boolean;
}

interface ListItemProps {
  item: ListItem;
  handleCheckboxChange: (id: string) => void;
}

const ListItem = ({ item, handleCheckboxChange }: ListItemProps) => {
  return (
    <>
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => handleCheckboxChange(item.id)}
      />
      {item.description}
    </>
  );
};

export default ListItem;
