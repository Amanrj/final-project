import React, { useRef, useState, useContext, useEffect } from 'react';
import { myContext } from "../context/FlightPerson";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import API from "./Axios";
import RazorpayComponent from './RazorpayComponent';
import swal from 'sweetalert';
// swal("Payment Successful", "Your payment has been processed successfully!", "success");
// swal("Payment Failed", "Your payment could not be processed!", "error");

const FinalBookingPageFlight = () => {
    const { bookingDetails, setBookingDetails } = useContext(myContext);
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
    const [isBooking, setIsBooking] = useState(false);
    const [isBookingDone, setisBookingDone] = useState(false);

    const [onPaymentSucess, setonPaymentSucess] = useState(null);
    const [onPaymentFail, setonPaymentFail] = useState(null);
    const navigate = useNavigate();

    const [amount, setAmount] = useState(0)
    const [orderid, setorderId] = useState("");
    const [bookingId, setBookingId] = useState(null);

    const cangeDateFormate = (date) => {
        const inputDate = new Date(date);
        const options = { weekday: 'short', day: 'numeric', month: 'short' };

        const formattedDate = inputDate.toLocaleDateString('en-US', options);

        return (formattedDate);

    }
    const handelback = () => {
        setBookingDetails(prev => {
            const { address, ...rest } = prev; // Destructure the address property and rest of the properties
            return { ...rest }; // Return a new object without the address property
        });

    }

    const handelBookingSubmit = () => {

        API.post(`/booking/done/${bookingId}`).then((ele) => {
            console.log(ele.data);
            setTimeout(()=>{
                navigate('/tickets')
            },2000)
        }).catch((err) => {
            console.log(err.message)
        })

    }

    const handelBooking = () => {
        setIsBooking(true);
        if (isAuthenticated && !isBooking) {
            API.post(`/booking/${user.email}`, bookingDetails).then((res) => {
                if (res.data.orderStatus == "created") {
                    console.log(res.data, "Booking Done");
                    setAmount(res.data.person * res.data.economyFare * 100);
                    setorderId(res.data.orderId);
                    setBookingId(res.data.bookingDetailsId)
                    setisBookingDone(true);

                }


            }).catch((err) => {
                console.log(err);
                // alert(err.message)
                setisBookingDone(false);
            })

        } else {
            alert("Booking in prossess...")
        }
    }

    const convertToAMPM = (timeString) => {
        const inputTime = new Date(`2024-02-06T${timeString}`);
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };

        const formattedTime = inputTime.toLocaleTimeString('en-US', options);

        return formattedTime;
    }
   
    useEffect(() => {
        if (onPaymentSucess) {
            swal("Payment Successful", "Your payment has been processed successfully!", "success");
            handelBookingSubmit();
        }
        if (onPaymentFail) {
            swal("Payment Failed", "Your payment could not be processed!", "error");
            setisBookingDone(false);
            setIsBooking(false);
        }
    }, [onPaymentSucess, onPaymentFail]);
    

    return <>
        <div>
           
            {isBookingDone && <RazorpayComponent orderid={orderid} amount={amount} bookinid={bookingId} setonPaymentFail={setonPaymentFail} setonPaymentSucess={setonPaymentSucess} />}
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
                bookingDetails.personDetails && bookingDetails.address &&
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
                        <label>Address: {`${bookingDetails.address.street} ${bookingDetails.address.city} ${bookingDetails.address.state} ${bookingDetails.address.zipcode}`}</label>
                    </div>
                </>
            }
            {
                bookingDetails.address &&
                <>
                    <div className='flights-list-final-book-button'>
                        <button hidden={isBooking} onClick={handelback} className='cancle-Payment'>Back</button>
                        <button onClick={handelBooking} className='pay-booking'>{isBooking ? "Booking..." : `Pay ${(+bookingDetails.economyFare) * (+bookingDetails.person)} INR`}</button>
                    </div>
                </>
            }
        </div>

    </>
}
export default FinalBookingPageFlight