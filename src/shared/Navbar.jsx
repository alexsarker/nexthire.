import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between text-main">
      <h4 className="font-light text-5xl">NextHire.</h4>
      <div className="flex gap-3">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/Post" className="hover:underline">Post a Job</Link>
        <Link to="/Logout" className="hover:underline">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
