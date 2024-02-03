import axios from "axios";
const API =axios.create({
    baseURL:"http://localhost:8888",
})
export default API;