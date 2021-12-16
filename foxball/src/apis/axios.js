import axios from 'axios'

const Axios = axios.create({
    baseURL: 'https://foxballer-be-hwh.herokuapp.com'
})

export default Axios