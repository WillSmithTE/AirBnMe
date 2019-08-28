import Axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
import { SERVER_API_PATH, ACCESS_TOKEN_KEY } from "../util/constants";
import { Error } from '../model/Error';

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
        return Promise.reject(new Error('You have to be logged in to do that!'));
    } else {
        const postOptions: AxiosRequestConfig = {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        };
        return Axios.post(path, data, postOptions).catch((error: AxiosError) => Promise.reject(Error.fromAxiosError(error)));
    }
}
