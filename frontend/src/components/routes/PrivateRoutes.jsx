
import React from "react";
import { Navigate,Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingComponent from "../LoadingComponent";

const PrivateRoutes =({children})=>{
    const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
    
    if(isLoading){
        return <LoadingComponent/>
    }

   if(!isAuthenticated){
    return <Navigate to={"/"}/>
   }
   return children;

}
export default PrivateRoutes;