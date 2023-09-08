import { BASE_URL } from "../../configs/urlBase";
import privateAxios from "../instances/privateAxios";

export const getUserById = (id) => {
    return privateAxios.get(`${BASE_URL}/users/${id}`);
  };