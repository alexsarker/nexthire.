import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between text-main">
      <h4 className="font-light text-5xl">NextHire.</h4>
      <div className="flex gap-3">
        {user ? (
          <>
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/Post" className="hover:underline">
              Post a Job
            </Link>
            <Link
              className="hover:underline"
              onClick={() => {
                logOut();
              }}
            >
              Logout
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
