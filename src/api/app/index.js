import axios from "axios";
// if (process.env.NODE_ENV==='production') {
//     axios.defaults.baseURL = 'http://120.78.155.149:3002';
// }

axios.defaults.baseURL = 'http://120.78.155.149:3002';
export default {
    test(){
        return axios({
            method: 'GET',
            url: '/weibo/test'
        })
    },
}
