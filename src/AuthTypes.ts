import { SERVER_API_PATH } from "./constants";

export interface LoginRequest {
    email: string;
    password: string;
}

export const AUTH_API_PATH = SERVER_API_PATH + 'auth/';