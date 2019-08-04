import { SERVER_API_PATH, ACCESS_TOKEN_KEY } from "../util/constants";
import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export const AUTH_API_PATH = SERVER_API_PATH + 'auth/';

export interface LoginRequest {
    readonly email: string;
    readonly password: string;
}

export interface RegisterRequest extends LoginRequest {
    readonly name: string;
}

export function postWithAuthToken(path: string, data: {}): Promise<AxiosResponse<any>> {
    const authToken: string | null = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (authToken === null) {
        return Promise.reject(`Unable to find auth token`);
    } else {
        const postOptions: AxiosRequestConfig = {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        };
        return Axios.post(path, data, postOptions);
    }
}
