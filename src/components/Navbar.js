import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <p>
        <Link to="/login">login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/">
          <BsPersonCircle />
        </Link>
      </p>
    </div>
  );
}

export default Navbar;
