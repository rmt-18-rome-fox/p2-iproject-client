import axios from 'axios'

const axie = axios.create({
  // baseURL: "https://cms-server2-ingabd.herokuapp.com",
  baseURL: 'http://localhost:3000'
})

export default axie
