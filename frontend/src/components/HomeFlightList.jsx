import React from "react";

import FlightCard from "./FlightCard";
import './FlightCard.css'

const FlighList = ({ data, date,person }) => {

    if (data.length > 0) {


        return <>
            <div className="container">
                <p className="stickyParagraph"> Total {data.length} Flight Between {data[0].origin} to {data[0].destination}</p>

                {data.map((ele) => (
                    <FlightCard data={ele} person={person} date={date} />
                ))}

            </div>
        </>
    }
}
export default FlighList;