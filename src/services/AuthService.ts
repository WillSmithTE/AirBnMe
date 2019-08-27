import { ACCESS_TOKEN_KEY } from "../util/constants";
import Axios from "axios";
import { AUTH_API_PATH } from "../model/AuthTypes";
import { isUndefined } from "util";

export class AuthService {

    private static VERIFY_TOKEN_API_PATH = `${AUTH_API_PATH}verifyToken/`;

    public static getUserIdFromAuthToken(): Promise<number> {
        const maybeToken: string | null = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (maybeToken === null) {
            return Promise.reject(`No token found`);
        } else {
            return Axios.get(`${AuthService.VERIFY_TOKEN_API_PATH}${maybeToken}`).then(
                (success) => Promise.resolve(success.data.userId),
                (error) => Promise.reject(`Invalid auth token: ${error}`)
            );
        }
    }

    public static isLoggedIn(userId: number | undefined) {
        return !isUndefined(userId);
    }

}