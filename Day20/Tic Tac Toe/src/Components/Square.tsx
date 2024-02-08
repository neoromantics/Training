interface Props {
  val: string;
  chooseSquare: () => void;
}

function Square({ val, chooseSquare }: Props) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
}

export default Square;
