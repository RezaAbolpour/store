import { BASE_URL } from "../../configs/urlBase.js";
import privateAxios from "../instances/privateAxios.js";

export function GetAllCategori(){
    return privateAxios.get(`${BASE_URL}/categories`)
}

export function GetSubCategori(){
    return privateAxios.get(`${BASE_URL}/subcategories`)
}
