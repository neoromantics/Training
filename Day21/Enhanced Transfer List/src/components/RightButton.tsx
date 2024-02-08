interface Props {
  moveRight: () => void;
}

const RightButton = ({ moveRight }: Props) => {
  return <button onClick={moveRight}>Move Right</button>;
};

export default RightButton;
