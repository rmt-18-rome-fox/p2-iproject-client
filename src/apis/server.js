import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000'
    // baseURL: 'https://hacktiv8-movies.herokuapp.com'
})