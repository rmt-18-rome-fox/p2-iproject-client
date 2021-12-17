import axios from "axios";

const API_URL = "https://server-newshub.herokuapp.com/";

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;