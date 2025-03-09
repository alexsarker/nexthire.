import { Input } from "@mui/material";
import Buttons from "../components/Buttons";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    setRegError("");

    if (password.length < 6) {
      setRegError("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password should be at least one Uppercase character.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegError("Password should be at least one Lowercase character.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name);
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

      {regError && <p className="text-red-700 pt-4 text-center">{regError}</p>}
    </form>
  );
};

export default Signup;
