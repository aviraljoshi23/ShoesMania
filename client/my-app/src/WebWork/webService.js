
import axios from "axios";

class WebService {
    static getAPi=(url,data)=>{
        let response = axios.get(url,data);
        return response;
    }
    static postApi=(url,data)=>{
        let response =  axios.post(url,data)
        return response
    }
}
export default WebService