import React from "react";
import { NavLink } from "react-router-dom";

function BarHeader(){
    return(
        <div>
            <nav className="container">
                <NavLink to="/" className="link">Landing</NavLink>
                <NavLink to="/signin" className="link">Login</NavLink>
                <NavLink to="/posts" className="link">Posts</NavLink>
            </nav>
        </div>
    );
}

export default BarHeader;