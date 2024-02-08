import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default HomePage;
