import React, { createContext,useState } from "react";

export const myContext=createContext();

const FlightPersonProvider=({children})=>{

    const [bookingDetails,setBookingDetails]=useState({});

    return <myContext.Provider value={{bookingDetails,setBookingDetails}}>{children}</myContext.Provider>
}
export default FlightPersonProvider