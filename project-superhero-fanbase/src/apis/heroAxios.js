import axios from 'axios'

const heroAxios = axios.create({
    baseURL:"https://herosrome.herokuapp.com"

})

export default heroAxios