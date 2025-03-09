import { Input, Alert, Snackbar } from "@mui/material";
import Buttons from "../components/Buttons";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [open, setOpen] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    setMessage("");

    if (password.length < 6) {
      setMessage("Password should be at least 6 characters long.");
      setAlertType("error");
      setOpen(true);
      return;
    } else if (!/[A-Z]/.test(password)) {
      setMessage("Password should contain at least one uppercase letter.");
      setAlertType("error");
      setOpen(true);
      return;
    } else if (!/[a-z]/.test(password)) {
      setMessage("Password should contain at least one lowercase letter.");
      setAlertType("error");
      setOpen(true);
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name);
        setMessage("Account created successfully!");
        setAlertType("success");
        setOpen(true);
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);

        console.log(result.user);
      })
      .catch((error) => {
        setMessage("Failed to create an account. Try again.");
        setAlertType("error");
        setOpen(true);
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSignUp} className="flex flex-col mt-48 gap-8">
      <h5 className="text-main text-2xl">Sign Up</h5>
      <Input size="md" type="text" name="name" placeholder="Full Name" required />
      <Input size="md" type="email" name="email" placeholder="Email" required />
      <Input size="md" type="password" name="password" placeholder="Password" required />
      <Buttons text="Create Account" type="submit" />

      <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity={alertType}>
          {message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default Signup;
