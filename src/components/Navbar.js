import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdAddLocation } from "react-icons/md";
import { GiAmpleDress } from "react-icons/gi";
import { GiGreenhouse } from "react-icons/gi";
import { BsCamera2 } from "react-icons/bs";
import { GiSugarCane } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";

function Navbar() {
  return (
    <div>
      <div className="container">
        <Link>logo</Link>
        <div className="middle">
          <div>
            <p>
              <ImHeadphones className="iconMiddle" />
            </p>
            <Link className="nameMiddle"> דיג'יי</Link>
          </div>
          <div>
            <p>
              <GiSugarCane className="iconMiddle" />
            </p>
            <Link className="nameMiddle">גני אירועים</Link>
          </div>
          <div>
            <p>
              <GiGreenhouse className="iconMiddle" />
            </p>
            <Link className="nameMiddle">אולמות אירועים</Link>
          </div>
          <div>
            <p>
              <GiAmpleDress className="iconMiddle" />
            </p>
            <Link className="nameMiddle">שמלות כלה</Link>
          </div>
          <div>
            <p>
              <BsCamera2 className="iconMiddle" />
            </p>
            <Link className="nameMiddle">צילום אירועים</Link>
          </div>
        </div>

        <div className="right">
          <div className="dropdown">
            <BsPersonCircle className="IconMenu" />
            <div>
              <Link to="/login">
                <FiLogIn className="nameMiddle" /> הירשם
              </Link>
              <Link to="/Register">
                <MdSystemUpdateAlt className="nameMiddle">
                  התחבר
                </MdSystemUpdateAlt>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
