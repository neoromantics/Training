interface Props {
  moveUp: () => void;
}

const UpButton = ({ moveUp }: Props) => {
  return <button onClick={moveUp}>Move Up</button>;
};

export default UpButton;
