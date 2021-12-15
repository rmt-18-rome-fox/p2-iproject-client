import axios from 'axios'

const heroAxios = axios.create({
    baseURL:"http://localhost:10000"

})

export default heroAxios