import { useContext, useEffect, useState } from "react";
import { myContext } from "../context/FlightPerson";
import PersonDetailsForm from "./PersonDetailsForm";
import './PersonDetails.css'
import { useNavigate } from "react-router-dom";
import ShowPersonDetails from "./ShowPersonDetails";

const PersonDetails = () => {
    const { bookingDetails, setBookingDetails } = useContext(myContext);

    const [person, setPerson] = useState([]);


    const navigate = useNavigate();

    console.log(bookingDetails);
    console.log(person);

    useEffect(() => {
        if (Object.keys(bookingDetails).length === 0) {
            navigate('/home')
        }
    }, [])


    return <>
        <div className="passangerdetails">
            {

                bookingDetails.person > person.length &&
                <p>Enter Details of {person.length + 1} Passanger</p> &&
                < PersonDetailsForm setPerson={setPerson} />
            }
            <ShowPersonDetails />
        </div>

    </>

}

export default PersonDetails;