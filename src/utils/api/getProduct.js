import axios from "axios";
import { BASE_URL } from "../../configs/urlBase.js";

export function GetAllProduct(){
    return axios.get(`${BASE_URL}/products`)
}
