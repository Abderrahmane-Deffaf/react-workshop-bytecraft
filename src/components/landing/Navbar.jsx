import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex gap-3 px-4 py-2 bg-blue-500 text-white">
      <Link to={"/"}>landing</Link>
      <Link to={"/login"}>sign in </Link>
    </div>
  );
};

export default Navbar;
