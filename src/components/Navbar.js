import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { MdSystemUpdateAlt } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <div className="container">
        <Link>logo</Link>
        <div className="middle">
          <Link>גני אירועים</Link>
          <Link>אולמות אירועים</Link>
          <Link>שמלות כלה</Link>
          <Link>צילום אירועים</Link>
          <Link> דיג'יי</Link>
        </div>

        <div className="right">
          <div className="dropdown">
            <BsPersonCircle className="IconMenu" />
            <div>
              <Link to="/login">
                <FiLogIn /> הירשם
              </Link>
              <Link to="/Register">
                <MdSystemUpdateAlt /> התחברות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
