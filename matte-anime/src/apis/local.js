import axios from "axios";

const url = "https://matte-anime.herokuapp.com/";
const instance = axios.create({
  baseURL: url
})

export default instance
