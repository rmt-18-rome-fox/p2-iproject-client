import axios from 'axios'

const server = axios.create({
  baseURL: "http://localhost:5000" // Localhost
  // baseURL: "http://localhost:5000" // Production
})

export {
  server
}