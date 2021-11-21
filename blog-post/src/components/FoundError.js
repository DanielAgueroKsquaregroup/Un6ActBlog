import React from "react";
import { NavLink } from "react-router-dom";

function FoundError(){
    return(
        <div>
            <h1 className="error-header">Page 404</h1>
            <p className="error-text">The page you are looking for does not exist</p>
            <NavLink to="/" className="link">Go back</NavLink>
        </div>
    );
}

export default FoundError;