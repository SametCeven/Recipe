import axios from "axios";

const API = axios.create({
    baseURL: "https://dummyjson.com/recipes",
})

export default API;
