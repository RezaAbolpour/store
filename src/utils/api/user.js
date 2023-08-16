import privateAxios from "../instances/privateAxios.js";

export const getAllUsers = () => {
    return privateAxios.get("users").then(res => res.data)
}