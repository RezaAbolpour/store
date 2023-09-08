import privateAxios from "../instances/privateAxios";
import { BASE_URL } from "../../configs/urlBase";
export const editUser = (userId,data) => {
  return privateAxios.patch(`${BASE_URL}/users/${userId}`, data);
};
