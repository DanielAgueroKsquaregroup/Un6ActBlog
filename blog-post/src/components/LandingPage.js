import React from "react";
import welcome from '../assets/welcome.png';
import {NavLink} from 'react-router-dom'

function LandingPage(){
    return(
        <div className="container">
            <NavLink to="/signin" className="link sig-up-btn">Sign In</NavLink>
            <h1 className="white">Welcome to my Blog</h1>
            <p className="welcome-text">In this space you will has access to all my posts of web development and programming tips for an easier coding time. Hope you enjoy the website.</p>
            <img src={welcome} alt="welcome to my blog" className="welcome-img" />
        </div>
    );
}

export default LandingPage;