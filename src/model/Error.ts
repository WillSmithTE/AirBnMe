import { AxiosError } from "axios";
import { isUndefined } from "util";

export class Error {
    private readonly message: string;

    constructor(message: string) {
        this.message = message;
    }

    public getMessage(): string {
        return this.message;
    }

    public static fromAxiosError(axiosError: AxiosError): Error {
        const message = isUndefined(axiosError.response) ?
            axiosError.message :
            axiosError.response.data.message;
        return new Error(message);
    }
}