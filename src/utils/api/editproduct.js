import privateAxios from "../instances/privateAxios";
import { BASE_URL } from "../../configs/urlBase";
export const editProductById = (id,body) => {
    privateAxios.patch(`${BASE_URL}/products/${id}`,body)
}