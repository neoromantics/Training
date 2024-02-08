interface Props {
  moveDown: () => void;
}

const DownButton = ({ moveDown }: Props) => {
  return <button onClick={moveDown}>Move Down</button>;
};

export default DownButton;
