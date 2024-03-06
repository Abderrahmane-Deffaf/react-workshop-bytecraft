import Navbar from "../components/landing/Navbar";
import SideElement from "../components/login/SideElement";
import SigninForm from "../components/login/SigninForm";

const Login = () => {
  return (
    /* section 1 photo, section 2 form */
    <div>
      <Navbar />
      <div className=" flex justify-between bg-blue-400 ">
        <SideElement />
        <SigninForm />
      </div>
    </div>
  );
};

export default Login;
