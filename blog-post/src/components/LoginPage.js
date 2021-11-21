import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FetchingData from "./FetchingData";

function LoginPage(){
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [errorMessage, setErrorMessage] = useState({ value: "" });

    const handleInputChange = (e) => {
        setUserData(prevState => {
            return{
                ...prevState,
                [e.target.name]: e.target.value,
            }
        });
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();

        // Returning error message if any field is empty
        if(userData.username === "" || userData.password === ""){
            setErrorMessage(prevState => ({
                value: "Please fill all fields",
            }));
        } else if(userData.username === "admin" && userData.password === "123456"){
            // Successful sigin
            localStorage.setItem('isAutheticated', "true");
            window.location.pathname = '/posts';
        } else{
            // Credentials are invalid
            setErrorMessage(prevState => ({ value: "Invalid password or username" }));
            return;
        }

        /* return(
            <FetchingData />
        ); */
    };
    return(
        <div>
            <form id="form">
                <h1 className="white">LOGIN PAGE</h1>
                <label className="white">User</label>
                <input type="text" placeholder="User/username" name="username" onChange={ e => handleInputChange(e) } required></input>
                <label className="white">Password</label>
                <input type="password" placeholder="Password" name="password" onChange={ e => handleInputChange(e) } required></input>
                <NavLink to="/posts" type="submit" className="link" onClick={handleOnSubmit} >Submit</NavLink>
            </form>
        </div>
    );
}

export default LoginPage;