import axios from 'axios'
import Home from './home.js'
let axiosInstance = axios.create({
    baseURL: 'http://mm.51wctt.com/Api/V1',
    // headers: {
    // 'Authorization': `token ${GH_TOKEN}`
    // }
});
module.exports={
    Home(id){
        return Home(axiosInstance,id)
    }
}