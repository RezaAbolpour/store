import axios from "axios";
import { BASE_URL } from "../../configs/urlBase.js";
import publicAxios from "../instances/publicAxios.js";

export function GetAllProduct(){
    return axios.get(`${BASE_URL}/products`)
}
export const getProductLimit = (_page, _limit) => {
    return publicAxios.get(`${BASE_URL}/products?page=${_page}&limit=${_limit}`)
}

export function getProductSubCategory(subCategory,limit=10,page=1){
    return publicAxios.get(`${BASE_URL}/products?subcategory=${subCategory}&page=${page}&limit=${limit}`)
}
