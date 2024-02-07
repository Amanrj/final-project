import React, { useRef, useState } from 'react';
import './PersonDetails.css'

const PersonDetailsForm = ({setPerson,messaage}) => {

    const nameInputRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        gender: 'male',
        age: '',
    });
    const validateForm = () => {
       

        // Validate Name
        if (formData.name.length < 3 || formData.name.length > 30) {
           alert( 'Name must be between 3 and 30 characters');
           return false
        }

        // Validate Age
        const ageValue = parseInt(formData.age, 10);
        if (isNaN(ageValue) || ageValue < 1 || ageValue > 120) {
           alert('Age must be a number between 1 and 120');
           return false
        }

        return true;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Add your logic here to handle the form submission
            setPerson((pre) => [...pre, formData]);
            setFormData({
                name: '',
                gender: 'male',
                age: '',
            })
            // console.log('Form data submitted:', formData);
            nameInputRef.current.focus();
        }
        

    };

    return (

        <div className="container-persondetail">
            <p className='passanger-message'>{messaage}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        ref={nameInputRef}
                    />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" value={formData.gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        id="age"
                        type="text"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button  className='add-button' type="submit">Add Person</button>
                </div>
            </form>
        </div>
    );
};

export default PersonDetailsForm;
