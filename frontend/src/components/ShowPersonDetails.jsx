import React from 'react'
import './PersonDetails.css'
const ShowPersonDetails = ({ person, setPerson }) => {

    const handelRemovePerson=(event)=>{
        setPerson((pre)=>pre.filter((ele,i)=>{
            return event.target.id!=i;
        }))
    }
    // console.log(person.length)
    return <>

        <div className="person-main">
            <>
            <div className='person-tital'>
                <div>Name</div>
                <div>Gender</div>
                <div>Age</div>
                <div></div>
            </div>
            </>
            {person.map((ele, i) => (

                <div className='person-inner'>
                    <div>{ele.name}</div>
                    <div>{ele.gender}{ele.age<3? " (Infants)":ele.age<13? " (Childrean)":" (Adults)"}</div>
                    <div>{ele.age}</div>
                    <div><button id={i} onClick={handelRemovePerson} className='person-button'>Remove</button></div>
                </div>
            ))}

        </div>

    </>
}

export default ShowPersonDetails;