import axios from "axios";
import { BASE_URL } from "../../configs/urlBase.js";

export function GetProductId(id){
    return axios.get(`${BASE_URL}/products/${id}`)
}
