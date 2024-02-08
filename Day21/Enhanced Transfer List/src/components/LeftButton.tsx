interface Props {
  moveLeft: () => void;
}

const LeftButton = ({ moveLeft }: Props) => {
  return <button onClick={moveLeft}>Move Left</button>;
};

export default LeftButton;
