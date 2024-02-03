import { useEffect, useState } from "react";
import API from "./Axios";
const AutoSugation = ({ city, setData }) => {

    const [sugest, setSugest] = useState([]);
    const callfunction = (data) => {
        setData(data);
        setSugest([]);
    }

    const testing = () => {
        API.get(`/airports/${city}`).then((ele) => {
            setSugest(ele.data)
        }).catch((ele) => {
        })
    }
    useEffect(() => {

        let interval;

        if (city !== "") {
            interval = setTimeout(() => {

                testing();
            }, 500);
        }
        return () => {
            clearTimeout(interval);
        }
    }, [city])


    return <>

        <ul className="ul">

            {sugest.map((ele, i) => (
                <div onClick={() => {
                    callfunction(ele);
                }} key={ele.airportId} id="ul-div">
                    <div className="ul-div-1">
                        <div className="ul-div-1-1"> {ele.city} </div>
                        <div className="ul-div-1-2">{ele.code}</div>
                    </div>
                    <div className="ul-div-2">{ele.airport}</div>
                </div>
            ))
            }
        </ul>
    </>
}
export default AutoSugation;