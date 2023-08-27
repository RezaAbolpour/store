import privateAxios from "../instances/privateAxios";
import { BASE_URL } from "../../configs/urlBase";
export const addProduct = (data) => {
  return privateAxios.post(`${BASE_URL}/products`, data);
};
