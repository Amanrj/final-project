import { useAuth0 } from "@auth0/auth0-react";
import LoadingComponent from "./LoadingComponent";

const About =()=>{
    const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
    if (isLoading) {
        return <LoadingComponent/>
      }
    return  <></>
    return <>
    <p>This is About page</p>
    </>
}
export default About;