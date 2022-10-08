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
          <BsPersonCircle className="signMenu" />
          <div className="dropDownMenu">
            <span>
              <Link to="/login">
                <FiLogIn /> הירשם
              </Link>
            </span>
            <span>
              <Link to="/Register">
                <MdSystemUpdateAlt /> התחברות
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
