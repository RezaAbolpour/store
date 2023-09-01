import { BASE_URL } from "../../configs/urlBase.js";
import privateAxios from "../instances/privateAxios.js";

export const removeProductById = (id) =>{
    return privateAxios.delete(`${BASE_URL}/products/${id}`)
}