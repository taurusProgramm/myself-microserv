export declare class CreateUserRequest {
    readonly user: {
        email: string;
        username: string;
        password: string;
    };
    constructor(user: {
        email: string;
        username: string;
        password: string;
    });
    toString(): string;
}
