import React from "react";
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ children }){
    const isAuthenticated = localStorage.getItem("isAutheticated");
    console.log("this", isAuthenticated);

    return(
        isAuthenticated ? children : <Navigate to="/signin" />
    );
}

export default ProtectedRoute;