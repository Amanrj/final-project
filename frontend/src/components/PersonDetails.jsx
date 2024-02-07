import { useContext, useEffect, useState } from "react";
import { myContext } from "../context/FlightPerson";
import PersonDetailsForm from "./PersonDetailsForm";
import './PersonDetails.css'
import { useNavigate } from "react-router-dom";
import ShowPersonDetails from "./ShowPersonDetails";
import Address from "./Address";

const PersonDetails = () => {
    const { bookingDetails, setBookingDetails } = useContext(myContext);
    const [address,setFinalAddress]= useState([]);

    const [person, setPerson] = useState([]);

    
    const navigate = useNavigate();
    
    // console.log(bookingDetails);
    // console.log(person);
    
    // console.log(address+"This is final address")
    useEffect(() => {
        if (Object.keys(bookingDetails).length === 0) {
            navigate('/home')
        }
    }, [])


    return <>
        <div className="passangerdetails">
            {

                bookingDetails.person > person.length  &&
                < PersonDetailsForm   setPerson={setPerson} messaage={`Add Details of passanger ${person.length+1} out of ${bookingDetails.person}`} />
            }
            {
                person.length !=0 &&
                <ShowPersonDetails  setPerson={setPerson} person={person}/>
            }
            {
                 bookingDetails.person <= person.length  &&
                 <Address  person={person} />

            }
        </div>

    </>

}

export default PersonDetails;