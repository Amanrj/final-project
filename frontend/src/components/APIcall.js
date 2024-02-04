
import API from "./Axios";

export const apiCallForFlightList = async (flightData) => {
    try {
        const response = await API.get(`/flight/${flightData.from}/${flightData.to}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
        // You might want to throw the error to handle it at a higher level
        // throw error;
    }
};
