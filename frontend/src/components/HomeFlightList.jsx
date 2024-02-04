import React from "react";

import FlightCard from "./FlightCard";
import './FlightCard.css'

const FlighList = ({ data, date }) => {

    if (data.length > 0) {


        return <>
            <div className="container">
                <p className="stickyParagraph"> Total 13 Flight</p>

                {data.map((ele) => (
                    <FlightCard data={ele} date={date} />
                ))}

            </div>
        </>
    }
}
export default FlighList;