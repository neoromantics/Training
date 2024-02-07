type listnameType = "list1" | "list2" | "list3" | "list4"

{id: 10, name: "name", se, listname: }

const data = [
  { id: 1, name: 'item 1', selected: false, isLeft: true },
  { id: 2, name: 'item 2', selected: false, isLeft: true },
  { id: 3, name: 'item 3', selected: false, isLeft: true },
  { id: 4, name: 'item 4', selected: false, isLeft: true },
  { id: 5, name: 'item 5', selected: false, isLeft: false },
  { id: 6, name: 'item 6', selected: false, isLeft: false },
  { id: 7, name: 'item 7', selected: false, isLeft: false },
  { id: 8, name: 'item 8', selected: false, isLeft: false },
];

function App() {
  const [items, setItems] = useState(data);

  const handleSelect = (id) => {
    setItems(
      items.map((_item) => {
        if (_item.id === id) {
          return {
            ..._item,
            selected: !_item.selected,
          };
        } else {
          return _item;
        }
      })
    );

    // setItems(
    //   items.map((_item) => (_item.id === id ? { ..._item, selected: !_item.selected } : _item))
    // );
  };

  //direct is "toLeft" or "toRight"
  const handleMove = (direction) => {
    // setItems(
    //   items.map((_item) => {
    //     if (_item.selected && direction === 'toLeft') {
    //       return { ..._item, isLeft: true };
    //     } else if (_item.selected && direction === 'toRight') {
    //       return { ..._item, isLeft: false };
    //     } else {
    //       return _item;
    //     }
    //   })
    // );
    // return;

    if (direction === 'toLeft') {
      setItems((prev) =>
        prev.map((_item) => {
          if (_item.selected && !_item.isLeft) {
            return { ..._item, isLeft: true };
          }
          return _item;
        })
      );
    } else {
      setItems((prev) =>
        prev.map((_item) => {
          if (_item.selected && _item.isLeft) {
            return { ..._item, isLeft: false };
          }
          return _item;
        })
      );
    }
  };

  const handleMoveAll = (direction) => {
    setItems(
      items.map((_item) => {
        return { ..._item, isLeft: direction === 'toLeft' };
      })
    );
  };

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <div>
        <h1>List 1</h1>
        <div>
          {items
            .filter((item) => item.isLeft)
            .map((item) => (
              <div key={item.id} onClick={handleSelect}>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelect(item.id)}
                />
                <div>{item.name}</div>
              </div>
            ))}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button onClick={() => handleMoveAll('toLeft')}>{'<<'}</button>
        <button onClick={() => handleMove('toLeft')}>{'<'}</button>
        <button onClick={() => handleMove('toRight')}>{'>'}</button>
        <button onClick={() => handleMoveAll('toRight')}>{'>>'}</button>
      </div>
      <div>
        <h1>List 2</h1>
        <div>
          {items
            .filter((item) => !item.isLeft)
            .map((item) => (
              <div key={item.id} onClick={handleSelect}>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => handleSelect(item.id)}
                />
                <div>{item.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then(setBooks)
  }, [])

  return (
    <>
      <h1>the title</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </>
  );
}