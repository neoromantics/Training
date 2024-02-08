interface Props {
  moveLeft: () => void;
}

const LeftButton = ({ moveLeft }: Props) => {
  return (
    <button onClick={moveLeft} className="button">
      Move Left
    </button>
  );
};

export default LeftButton;
