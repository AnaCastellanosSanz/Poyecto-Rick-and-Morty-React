import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ authenticated }) {
    let location = useLocation();


    //Si el usuario no esta autentificado, en la parte de location te manda a la página de login 
    if (!authenticated){
        return <Navigate to="/login" state={{from: location}} replace />
    }
}