import {Api} from './Api.ts';
import {AxiosError, AxiosResponse} from "axios";
import {toast} from "react-hot-toast";

export const baseUrl = 'http://localhost:8080';

export const http = new Api({
    baseURL: baseUrl
});
http.instance.interceptors.request.use(config => {
    config.headers.Authorization = "Bearer " + localStorage.getItem('jwt') || '';
    return config;
});
http.instance.interceptors.request.use(config => {

    if (config.data && typeof config.data === 'object' && !(config.data instanceof FormData)) {
        // config.data = removeNullProperties(config.data);
    }
    return config;
}, error => {
    return Promise.reject(error);
});

http.instance.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (error: AxiosError<any, any>) => {

    const problemDetails = error.response?.data as any;
    if (problemDetails) {
        console.log(problemDetails)
        toast.error(problemDetails.title);
    }

    return Promise.reject(error);
});
