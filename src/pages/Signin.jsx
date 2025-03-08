import { Input } from "@mui/material";
import Buttons from "../components/Buttons";

const Signin = () => {
  return (
    <div className="flex flex-col mt-48 gap-8">
      <h5 className=" text-main text-2xl ">Sign In</h5>
      <Input size="md" placeholder="Email" />
      <Input size="md" placeholder="Password" />
      <Buttons text="Sign In" />
    </div>
  );
};

export default Signin;
