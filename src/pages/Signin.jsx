import { Input, Alert, Snackbar } from "@mui/material";
import Buttons from "../components/Buttons";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Signin = () => {
  const { signUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [open, setOpen] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signUser(email, password)
      .then(() => {
        setMessage("Sign-in successful!");
        setAlertType("success");
        setOpen(true);
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        setMessage("Failed to sign in. Please check your credentials.");
        setAlertType("error");
        setOpen(true);
      });
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col mt-48 gap-8">
      <h5 className="text-main text-2xl">Sign In</h5>
      <Input size="md" type="email" name="email" placeholder="Email" required />
      <Input
        size="md"
        type="password"
        name="password"
        placeholder="Password"
        required
      />
      <Buttons text="Sign In" type="submit" />

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity={alertType}>
          {message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default Signin;
