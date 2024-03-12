import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { userContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { setUser } = useContext(userContext);
  const naviagete = useNavigate();

  return (
    <div className=" flex">
      <p className=" h-screen w-[20rem] bg-blue-300 text-black">
        <button
          onClick={() => {
            setUser(null);
            naviagete("/");
          }}
        >
          log out
        </button>
      </p>
      <Outlet />
      <p className=" h-screen w-[20rem] bg-blue-300 text-black">sidebar</p>
    </div>
  );
};

export default Home;
