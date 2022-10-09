import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { GiAmpleDress } from "react-icons/gi";
import { GiGreenhouse } from "react-icons/gi";
import { BsCamera2 } from "react-icons/bs";
import { GiSugarCane } from "react-icons/gi";
import { IoMdMusicalNotes } from "react-icons/io";
import img from "../imges/myday.png";

function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="logoDiv">
          <img src={img} alt="my logo" className="mylogo" />
        </div>
        <div className="middle">
          <div>
            <p>
              <Link to="/Dj">
                <IoMdMusicalNotes className="iconMiddle" />
              </Link>
            </p>
            <Link to="/Dj" className="nameMiddle">
              דיג'יי
            </Link>
          </div>
          <div>
            <p>
              <Link to="/Gardens">
                <GiSugarCane className="iconMiddle" />
              </Link>
            </p>
            <Link to="/Gardens" className="nameMiddle">
              גני אירועים
            </Link>
          </div>
          <div>
            <p>
              <Link to="/halls">
                <GiGreenhouse className="iconMiddle" />
              </Link>
            </p>
            <Link to="/halls" className="nameMiddle">
              אולמות אירועים
            </Link>
          </div>
          <div>
            <p>
              <Link to="/dresses">
                <GiAmpleDress className="iconMiddle" />
              </Link>
            </p>
            <Link to="/dresses" className="nameMiddle">
              שמלות כלה
            </Link>
          </div>
          <div>
            <p>
              <Link to="/EventsPhoto">
                <BsCamera2 className="iconMiddle" />
              </Link>
            </p>
            <Link to="/EventsPhoto" className="nameMiddle">
              צילום אירועים
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="dropdown">
            <BsPersonCircle className="IconMenu" />
            <div>
              <Link to="/Register" className="nameMiddle">
                התחבר
              </Link>
              <Link to="/login" className="nameMiddle">
                הירשם
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
