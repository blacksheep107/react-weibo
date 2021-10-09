import axios from "axios";
export default {
    login(){
        axios.get('/mock/personalCenter/login').then(res=>{
            console.log(res);
        })
    },

}
