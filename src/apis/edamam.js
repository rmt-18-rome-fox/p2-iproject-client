import axios from "axios"

export default axios.create({
  apiUrl: "https://api.edamam.com/search"
})