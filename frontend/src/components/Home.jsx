
import { useAuth0 } from "@auth0/auth0-react";
import TravelForm from "./TravelForm";
import LoadingComponent from "./LoadingComponent";
import React,{useEffect, useState} from "react";
import FlighList from "./HomeFlightList";
const Home =()=>{
    const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
    const [filghtData,setFlightData]=useState({});
    const [listOfFlight,setListofFlight]=useState([]);

    useEffect(()=>{
      if(Object.keys(filghtData).length>0){
        console.log("hrllo from main")
        console.log(filghtData);
      }

    },[filghtData])

    const setData=(data)=>{
      setFlightData(data)
    }
    if (isLoading) {
        return <LoadingComponent/>
      }
    return  <>

    <TravelForm setData={setData}/>
    {/* {  <FlighList data={filghtData}/>}  */}
   

   
  </>
}
export default Home;