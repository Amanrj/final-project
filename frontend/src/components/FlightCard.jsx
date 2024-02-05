import React from 'react';
import './FlightCard.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { myContext } from "../context/FlightPerson";
import { useNavigate } from 'react-router-dom';



const FlightCard = ({ data, date,person }) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const {bookingDetails,setBookingDetails} =useContext(myContext);
  const navigate=useNavigate();

  const cangeDateFormate = (date) => {
    const inputDate = new Date(date);
    const options = { weekday: 'short', day: 'numeric', month: 'short' };

    const formattedDate = inputDate.toLocaleDateString('en-US', options);

   return(formattedDate);

  }

  const convertToAMPM=(timeString)=> {
    const inputTime = new Date(`2024-02-06T${timeString}`);
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  
    const formattedTime = inputTime.toLocaleTimeString('en-US', options);
  
    return formattedTime;
  }
  


  const handelBooking = () => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }else{
      setBookingDetails({...data,date,person});
      navigate('/person')
    }
  }



  return (
    <div className="flights-list">
      <div className="airlines-name">
        <p>{data.airline}</p>
      </div>
      <div className="flight-card__departure">
        <time className="flight-card__time">{convertToAMPM(data.departTime)}</time>
        <h2 className="flight-card__city">{data.origin}</h2>
        <time className="flight-card__day">{cangeDateFormate(date)}</time>
      </div>
      <div className="flight-card__route">
        <p className="flight-card__duration">{data.duration}</p>
        <div className="flight-card__route-line route-line" aria-hidden="true">
          <div className="route-line__stop route-line__start" aria-hidden="true"></div>
          <div className="route-line__stop route-line__end" aria-hidden="true"></div>
        </div>
        {/* <p className="flight-card__type">Non-stop</p> */}
      </div>
      <div className="flight-card__arrival">
        <time className="flight-card__time">{convertToAMPM(data.arrivalTime)}</time>
        <h2 className="flight-card__city">{data.destination}</h2>
        <time className="flight-card__day">{cangeDateFormate(date)}</time>
      </div>
      <div className="flight-card__action">
        <p className="flight-card__price styled-price">{data.economyFare}</p>
        <button onClick={handelBooking} className="flight-card__cta button button--orange">{isAuthenticated ? "Select" : "LogIn"}</button>
      </div>
    </div>
  );
};

export default FlightCard;
