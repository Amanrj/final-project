import React,{useState,useEffect} from "react";
import FlightTicket from "./FlightTicket";
import API from "./Axios";
import { useAuth0 } from "@auth0/auth0-react";

const Tickets =()=>{
    const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
    const [isOpen,SetIsOpen]=useState(null);
    const [ticketdetails,setTicketDetails]=useState(null);

    
    const handelData=()=>{

        if(!isLoading && isAuthenticated){
            API.get(`booking/${user.email}`).then((res)=>{
                setTicketDetails(res.data)
            }).catch((rej)=>{
                alert(rej.message)
            })
        }

    }


    useEffect(()=>{
        handelData();

    },[])

    

    return <>
            {/* <FlightTicket isOpen={isOpen} SetIsOpen={SetIsOpen} i={0}/>
            <FlightTicket isOpen={isOpen} SetIsOpen={SetIsOpen} i={1}/>
            <FlightTicket isOpen={isOpen} SetIsOpen={SetIsOpen} i={2}/> */}

            <div className="ticket-container">
                {ticketdetails && 
                
                    ticketdetails.map((ele,i)=>(
                        
                            ele.orderStatus=="paid" &&
                            <FlightTicket  isOpen={isOpen} SetIsOpen={SetIsOpen} i={i} ele={ele}/>
                        
                    ))
                
                }
            </div>
    </>
}
export default Tickets;