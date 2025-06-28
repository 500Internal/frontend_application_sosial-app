import axios from "axios";
import { baseUrl } from "./baseUrl";
import type { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    baseURL:baseUrl,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const apiClient = async <T>(config:AxiosRequestConfig):Promise<T> => {
    const response = await axiosInstance(config)
    return response.data
}