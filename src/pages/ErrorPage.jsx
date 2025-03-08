import React from "react";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h2 className="text-8xl font-light text-main">Error!</h2>
      <Link to="/">
        <Buttons text="Go Back" />
      </Link>
    </div>
  );
};

export default ErrorPage;
