import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "grey",
    textDecoration: "none",
    color: "white",
  };

export default function Navbar(){
    return(
        <div>
            <NavLink to="/About" exact style={linkStyles}>About</NavLink>
            <NavLink to="/Contact" exact style={linkStyles}>Contact</NavLink>
        </div>
      )
}