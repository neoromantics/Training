import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default HomePage;
