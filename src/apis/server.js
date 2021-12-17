import axios from 'axios'

const axie = axios.create({
  // baseURL: 'http://allhandsondeck-v0.herokuapp.com'
  baseURL: 'http://localhost:3000'
})

export default axie
