import { useTheme } from "@emotion/react";
import axiousClinet from "./axiouClient";

const author = {
    register: async (body) => {
        const url = `http://localhost:8080/api/v1/users/register`
        return axiousClinet.post(url, body)
    },
    login: async (body) => {
        const url = `http://localhost:8080/api/v1/users/login`
        return axiousClinet.post(url, body, { withCredentials: true })
    },
    logout: async () => {
        const url = 'http://localhost:8080/api/v1/users/logout'
        return axiousClinet.get(url)
    },
    loginByGoogle: async () => {
        const url = `/api/v1/auth/google`

        return axiousClinet.get(url)
    }
}

export default author