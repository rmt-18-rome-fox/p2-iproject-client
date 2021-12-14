import axios from "axios";

const url = "https://api.jikan.moe/v3";
const instance = axios.create({
  baseURL: url
})

export default instance
