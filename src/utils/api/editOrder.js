import { BASE_URL } from "../../configs/urlBase";
import privateAxios from "../instances/privateAxios";

export const editOrder = async (idOrder,body) => {
  const res = await privateAxios.patch(`${BASE_URL}/orders/${idOrder}`, body);
  return res;
};
