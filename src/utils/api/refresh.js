import privateAxios from "../instances/privateAxios.js";

export const refreshToken = (token) => {
    return privateAxios.post("/auth/token" , {
        refreshToken : token
    }).then(res => res.data)
}