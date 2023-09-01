import { BASE_URL } from "../../configs/urlBase.js";
import publicAxios from "../instances/publicAxios.js";

export function GetAllCategori(){
    return publicAxios.get(`${BASE_URL}/categories`)
}

export function GetSubCategori(){
    return publicAxios.get(`${BASE_URL}/subcategories`)
}
