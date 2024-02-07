import ListItem from "./ListItem";

interface List {
  items: ListItem[];
  setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
}

const List = ({ items, setList }: List) => {
  const handleCheckboxChange = (id: string) => {
    setList((prevs) =>
      prevs.map((prev) =>
        prev.id === id ? { ...prev, isChecked: !prev.isChecked } : prev
      )
    );
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ListItem item={item} handleCheckboxChange={handleCheckboxChange} />
        </li>
      ))}
    </ul>
  );
};

export default List;
