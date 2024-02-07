import { FaArrowUp } from "react-icons/fa";

interface ButtonProps {
  handleClick: () => void;
}

function UpButton({ handleClick }: ButtonProps) {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClick}
    >
      <FaArrowUp />
      <span style={{ marginLeft: "8px" }}>Move Up</span>
    </button>
  );
}

export default UpButton;
