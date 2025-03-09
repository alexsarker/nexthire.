import { useContext } from "react";
import Dropdown from "../components/Dropdown";
import { AuthContext } from "../providers/AuthProvider";
import Buttons from "../components/Buttons";
import ButtonOut from "../components/ButtonOut";
import { Link } from "react-router-dom";
const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <h2 className="pt-32 text-5xl font-normal text-center text-main">
            BROWSE OPEN POSITIONS
          </h2>
          <Dropdown />
        </div>
      ) : (
        <div className="text-main">
          <h2 className="pt-64 text-5xl font-light text-center">
            You Need To <span className="font-bold">Sign Up</span> or{" "}
            <span className="font-bold">Sign In</span> Before!
          </h2>
          <div className="flex justify-center items-center gap-4 pt-12">
            <Link to="/signup">
              <ButtonOut text="Sign Up" />
            </Link>
            <p>Or</p>
            <Link to="/signin">
              <Buttons text="Sign In" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
