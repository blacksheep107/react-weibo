import axios from 'axios';
const api = axios.create({
    timeout: 10000, // 10s超时
    headers: {
        get: {

        }
    }
});
export default {
    api
}
