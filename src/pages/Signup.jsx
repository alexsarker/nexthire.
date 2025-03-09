import { Input } from "@mui/material";
import Buttons from "../components/Buttons";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col mt-48 gap-8">
      <h5 className=" text-main text-2xl ">Sign Up</h5>
      <Input size="md" type="text" name="name" placeholder="Full Name" />
      <Input size="md" type="email" name="email" placeholder="Email" />
      <Input size="md" type="password" name="password" placeholder="Password" />
      <Buttons text="Create Account" type="submit" />
    </form>
  );
};

export default Signup;
