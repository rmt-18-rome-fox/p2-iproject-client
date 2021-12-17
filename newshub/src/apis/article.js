import axios from "axios";

const API_URL = "https://project-newshub.web.app/";

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;