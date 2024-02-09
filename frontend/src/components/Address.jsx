import React, { useState ,useContext, useEffect} from 'react';
import { myContext } from "../context/FlightPerson";
import './PersonDetails.css'
const Address = ({setFinalAddress,person}) => {
    const { bookingDetails, setBookingDetails } = useContext(myContext);
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zipcode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address.street.trim() === '' || address.city.trim() === '' || address.state.trim() === '' || address.zipcode.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        if (!/^\d{6}$/.test(address.zipcode)) {
            alert('Please enter a 6-digit pin code');
            return;
        }

        setBookingDetails((prev)=>({...prev,"personDetails":person}))
        setBookingDetails((prev)=>({...prev,"address":address}))
        // console.log(bookingDetails)
    };
    useEffect(() => {
        console.log(bookingDetails);
    }, [bookingDetails]);

    return (
        <>
            <form className='address-form' onSubmit={handleSubmit}>
                <p>Fill Your Address:</p>
                <div className='address-form-desigine'>


                    <label htmlFor="street">Street:</label>
                    <input className='persondetails-input'
                        type="text"
                        id="street"
                        name="street"
                        value={address.street}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="city">City:</label>
                    <input className='persondetails-input'
                        type="text"
                        id="city"
                        name="city"
                        value={address.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='address-form-desigine'>
                    <label htmlFor="state">State:</label>
                    <input className='persondetails-input'
                        type="text"
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="zipcode">Zipcode:</label>
                    <input className='persondetails-input'
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={address.zipcode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button className='address-button' type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default Address;
