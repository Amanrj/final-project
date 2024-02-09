import React from 'react';
import './FlightTickets.css'

const FlightTicket = ({ SetIsOpen, i, isOpen, ele }) => {

  console.log(ele)


  const togaelopen = () => {
    if (isOpen == i) {
      SetIsOpen(null);
    } else {
      SetIsOpen(i);
    }
  }


  return (
    <div className="ticket-container2">
      <div onClick={togaelopen} className={`flightticket ${isOpen == i ? "open" : ""}`}>

        <div className="flightticket-header">
          <div className="flightticket-logo">
            <p>{ele.airline}</p>
          </div>
          <div className="flightticket-airport">
            {/* <span className="flightticket-label">Budapest Airport, Hungary</span> */}
            <span className="flightticket-airportcode">{ele.origin}</span>
          </div>
          <div className="flight-card__route-line route-line width30" aria-hidden="true">
            <div className="route-line__stop route-line__start" aria-hidden="true"></div>
            <div className="route-line__stop route-line__end" aria-hidden="true"></div>
          </div>
          <div className="flightticket-airport">
            {/* <span className="flightticket-label">Warsaw Chopin</span> */}
            <span className="flightticket-airportcode">{ele.destination}</span>
          </div>
        </div>
        <div className="flightticket-details">
          <div className="flightticket-content">
            <div className="flightticket-block">
              <span className="flightticket-label">Flight number</span>
              <span className="flightticket-value">{ele.flightNo}</span>
            </div>
            <div className="flightticket-block">
              <span className="flightticket-label">Person</span>
              <span className="flightticket-value">{ele.person}</span>
            </div>
            <div className="flightticket-block">
              <span className="flightticket-label">Fair</span>
              <span className="flightticket-value">{ele.economyFare * ele.person}</span>
            </div>
            <div className="flightticket-block">
              <span className="flightticket-label">Distance</span>
              <span className="flightticket-value">526 km</span>
            </div>
            <div className="flightticket-block">
              <span className="flightticket-label">Departure</span>
              <span className="flightticket-value">{ele.date} {ele.departTime}</span>
            </div>
            <div className="flightticket-block">
              <span className="flightticket-label">Arrival</span>
              <span className="flightticket-value">{ele.date} {ele.arrivalTime}</span>
            </div>
            <div className="flightticket-block">
              <span className="flightticket-label">Duration</span>
              <span className="flightticket-value">{ele.duration}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FlightTicket;
