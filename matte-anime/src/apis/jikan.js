import axios from "axios";

const url = "https://api.jikan.moe/v4/";
const instance = axios.create({
  baseURL: url
})

export default instance
