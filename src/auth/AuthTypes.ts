import { SERVER_API_PATH } from "../constants";

export const AUTH_API_PATH = SERVER_API_PATH + 'auth/';

export interface LoginRequest {
    readonly email: string;
    readonly password: string;
}

export interface RegisterRequest extends LoginRequest {
    readonly name: string;
}
