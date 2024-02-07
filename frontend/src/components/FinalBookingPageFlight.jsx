import React, { useRef, useState, useContext } from 'react';
import { myContext } from "../context/FlightPerson";



const FinalBookingPageFlight = () => {
    const { bookingDetails, setBookingDetails } = useContext(myContext);
    console.log(bookingDetails);
    const cangeDateFormate = (date) => {
        const inputDate = new Date(date);
        const options = { weekday: 'short', day: 'numeric', month: 'short' };

        const formattedDate = inputDate.toLocaleDateString('en-US', options);

        return (formattedDate);

    }
    const handelback=()=>{
        setBookingDetails(prev => {
            const { address, ...rest } = prev; // Destructure the address property and rest of the properties
            return { ...rest }; // Return a new object without the address property
          });
          
    }

    const handelBooking=()=>{
        alert("Booking Done");
    }

    const convertToAMPM = (timeString) => {
        const inputTime = new Date(`2024-02-06T${timeString}`);
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };

        const formattedTime = inputTime.toLocaleTimeString('en-US', options);

        return formattedTime;
    }

    return <>
        <div>
            <div className="flights-list-final">
                <div className="airlines-name">
                    <p>{bookingDetails.airline}</p>
                </div>
                <div className="flight-card__departure">
                    <time className="flight-card__time">{convertToAMPM(bookingDetails.departTime)}</time>
                    <h2 className="flight-card__city">{bookingDetails.origin}</h2>
                    <time className="flight-card__day">{cangeDateFormate(bookingDetails.date)}</time>
                </div>
                <div className="flight-card__route">
                    <p className="flight-card__duration">{bookingDetails.duration}</p>
                    <div className="flight-card__route-line route-line" aria-hidden="true">
                        <div className="route-line__stop route-line__start" aria-hidden="true"></div>
                        <div className="route-line__stop route-line__end" aria-hidden="true"></div>
                    </div>
                    <p className="flight-card__type">Total Fair {(+bookingDetails.economyFare) * (+bookingDetails.person)} INR</p>
                </div>
                <div className="flight-card__arrival">
                    <time className="flight-card__time">{convertToAMPM(bookingDetails.arrivalTime)}</time>
                    <h2 className="flight-card__city">{bookingDetails.destination}</h2>
                    <time className="flight-card__day">{cangeDateFormate(bookingDetails.date)}</time>
                </div>
            </div>
            {
                bookingDetails.personDetails  && bookingDetails.address &&
                <>
                    <div className='flights-list-final-detsils'>
                        <div className='flights-list-final-detsils-hadder'>
                            <p>Passanger Details</p>
                        </div>
                        <div className="person-main">
                            <>
                                <div className='person-tital'>
                                    <div>Name</div>
                                    <div>Gender</div>
                                    <div>Age</div>
                                </div>
                            </>
                            {bookingDetails.personDetails && bookingDetails.personDetails.map((ele, i) => (

                                <div className='person-inner'>
                                    <div>{ele.name}</div>
                                    <div>{ele.gender}{ele.age < 3 ? " (Infants)" : ele.age < 13 ? " (Childrean)" : " (Adults)"}</div>
                                    <div>{ele.age}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            }{
                bookingDetails.address &&
                <>
                    <div className='flights-list-final-detsils-address'>
                        <label>Address: { `${bookingDetails.address.street} ${bookingDetails.address.city} ${bookingDetails.address.state} ${bookingDetails.address.zipcode}`}</label>
                    </div>
                </>
            }
            {
                bookingDetails.address &&
                <>
                <div className='flights-list-final-book-button'>
                    <button onClick={handelback} className='cancle-Payment'>Back</button>
                    <button onClick={handelBooking} className='pay-booking'>{`Pay ${(+bookingDetails.economyFare) * (+bookingDetails.person)} INR`}</button>
                </div>
                </>
            }

        </div>

    </>
}
export default FinalBookingPageFlight