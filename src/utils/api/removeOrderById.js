import privateAxios from "../instances/privateAxios";
import { BASE_URL } from "../../configs/urlBase";
export const removeOrderById = (id) => {
  return privateAxios.delete(`${BASE_URL}/orders/${id}`);
};
