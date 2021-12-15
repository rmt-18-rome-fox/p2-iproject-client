import axios from 'axios'

const superhero_token = "10209503281895479"

const superheroAxios = axios.create({
    baseURL:`https://superheroapi.com/api/${superhero_token}/`

})

export default superheroAxios