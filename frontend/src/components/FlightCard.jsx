import React from 'react';
import './FlightCard.css'
import { useAuth0 } from "@auth0/auth0-react";


const FlightCard = ({data,date}) => {
    const { loginWithRedirect,logout,user,isAuthenticated,isLoading } = useAuth0();
    const handelBooking=()=>{
        if(!isAuthenticated){
            loginWithRedirect();
           }
    }

    console.log(data)

  return (
    <div className="flights-list">
      <div className="airlines-name">
       <p>{data.airline}</p>
      </div>
      <div className="flight-card__departure">
        <time className="flight-card__time">{data.departTime}</time>
        <h2 className="flight-card__city">{data.origin}</h2>
        <time className="flight-card__day">{date}</time>
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
        <time className="flight-card__time">{data.arrivalTime}</time>
        <h2 className="flight-card__city">{data.destination}</h2>
        <time className="flight-card__day">{date}</time>
      </div>
      <div className="flight-card__action">
        <p className="flight-card__price styled-price">{data.economyFare}</p>
        <button onClick={handelBooking} className="flight-card__cta button button--orange">{isAuthenticated? "Select":"LogIn"}</button>
      </div>
    </div>
  );
};

export default FlightCard;
