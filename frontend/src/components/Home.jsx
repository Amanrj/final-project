
import { useAuth0 } from "@auth0/auth0-react";
import TravelForm from "./TravelForm";
const Home =()=>{
    const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
    if (isLoading) {
        return <p>Loading...</p>;
      }
    return  <>

    <TravelForm/>


    {/* <p>This is home page</p>
    {isAuthenticated ? (
      <p>{user?.name}</p>
    ) : (
      <button onClick={() => loginWithRedirect()}>Log In</button>
    )} */}
   
  </>
}
export default Home;