import { useAuth0 } from "@auth0/auth0-react";
import TravelForm from "./TravelForm";
import LoadingComponent from "./LoadingComponent";
import React,{useEffect, useState} from "react";
import FlighList from "./HomeFlightList";
import { apiCallForFlightList } from "./APIcall";
const Home =()=>{
    const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
    const [filghtData,setFlightData]=useState({});
    const [listOfFlight,setListofFlight]=useState([]);

    const fetchData = async () => {
      try {
        if (Object.keys(filghtData).length > 0) {
          const flightList = await apiCallForFlightList(filghtData);
          if(flightList.length>0){

            setListofFlight(flightList);
          }else{
            setListofFlight([]);
            alert(`Flight Not avilable`)
          }
        }
      } catch (error) {
        console.error("Error fetching flight list:", error.message);
      }
    };

    useEffect(() => {
      
      fetchData();
    }, [filghtData]);
    
    const setData=(data)=>{
      setFlightData(data)
    }
    if (isLoading) {
        return <LoadingComponent/>
      }
    return  <>

    <TravelForm setData={setData}/>
    <FlighList data={listOfFlight} person={filghtData.person} date={filghtData.fromDate}/>
   

   
  </>
}
export default Home;