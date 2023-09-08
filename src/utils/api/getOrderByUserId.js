import { BASE_URL } from "../../configs/urlBase";
import privateAxios from "../instances/privateAxios";

export const getOredrById = (id) => {
  return privateAxios.get(`${BASE_URL}/orders?user=${id}`);
};
