import axios from "axios"
import config from "../../config.json" 

const ApiInstance = () => { 
    axios.create({ 
        baseURL: config.apiServerBase,
        timeout: config.timeout
    })
}

export default ApiInstance