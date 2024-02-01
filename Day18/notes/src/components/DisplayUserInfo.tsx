import { useSelector } from "react-redux";
// import { RootState } from "../types";
import { RootState } from "../store";

const DisplayUserInfo = () => {
  const { counter, user } = useSelector((state: RootState) => state);

  return (
    <div>
      <p>Counter: {counter.counter}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default DisplayUserInfo;
