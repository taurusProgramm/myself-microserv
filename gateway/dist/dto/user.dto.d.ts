export declare class LoginUserDto {
    readonly email: string;
    readonly password: string;
}
export declare class RegistrationUserDto {
    email: string;
    readonly username: string;
    readonly password: string;
    description: string;
    activationLink: string;
}
export declare class Get2FAUserDto {
    readonly email: string;
}
export declare class GoogleAuthenticator {
    readonly email: string;
    readonly tokenFrom2FA: string;
}
