import { BASE_URL } from "../../configs/urlBase";
import privateAxios from "../instances/privateAxios";

export const creatNewOrder = async (body) => {
  const res = await privateAxios.post(`${BASE_URL}/orders`, body);
  return res;
};
