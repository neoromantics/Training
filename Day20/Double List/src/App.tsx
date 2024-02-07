import { useState } from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";
import { initialList1, initialList2 } from "./assets/initialData";
import UpButton from "./components/LeftButton";

function App() {
  const [list1, setList1] = useState<ListItem[]>(initialList1);
  const [list2, setList2] = useState<ListItem[]>(initialList2);

  const handleClick = (
    moveFrom: ListItem[],
    moveTo: ListItem[],
    setMoveFrom: React.Dispatch<React.SetStateAction<ListItem[]>>,
    setMoveTo: React.Dispatch<React.SetStateAction<ListItem[]>>
  ) => {
    const checkedItems: ListItem[] = moveFrom.filter((item) => item.isChecked);
    setMoveFrom((prevs) =>
      prevs.map((prev) => {
        prev.isChecked = false;
        return prev;
      })
    );
    setMoveTo([...moveTo, ...checkedItems]);
  };

  return (
    <>
      <div className="col">
        <div className="row">
          <List items={list1} setList={setList1} />
        </div>
        <div>
          <UpButton
            handleClick={() => handleClick(list2, list1, setList2, setList1)}
          />
        </div>
        <div className="row">
          <List items={list2} setList={setList2} />
        </div>
      </div>
    </>
  );
}

export default App;
