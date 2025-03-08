import { Button, Input } from "@mui/material";
import Buttons from "../components/Buttons";

const Signup = () => {
  return (
    <div className="flex flex-col mt-48 gap-8">
      <h5 className=" text-main text-2xl ">Sign Up</h5>
      <Input size="md" placeholder="Full Name" />
      <Input size="md" placeholder="Email" />
      <Input size="md" placeholder="Password" />
      <Input size="md" placeholder="Confirm Password" />
      <Buttons text="Create Account"/>
    </div>
  );
};

export default Signup;
