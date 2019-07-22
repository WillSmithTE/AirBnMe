import { SERVER_API_PATH } from "./constants";

export const AUTH_API_PATH = SERVER_API_PATH + 'auth/';

export interface LoginRequest {
    readonly email: string;
    readonly password: string;
}

export class BasicRegisterRequest {

    private readonly email: string;
    private readonly password: string;
    private readonly name: string;

    constructor(email: string, password: string, name: string) {
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public getEmail(): string {
		return this.email;
    }
    
    public getPassword(): string {
        return this.password;
    }

    public getName(): string {
        return this.name;
    }
}
