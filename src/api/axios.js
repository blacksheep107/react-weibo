import axios from 'axios';
const api = axios.create({
    timeout: 10000, // 10s超时
    headers: {
        get: {

        }
    }
});
api.interceptors.requests.use(
    config=>{
        console.log(config);
    },
    error=>{
        console.log(error)
    }
);
api.interceptors.response.use(response=>{
    console.log(response);
    return Promise.resolve(response);
})
