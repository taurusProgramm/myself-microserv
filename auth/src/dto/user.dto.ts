
export class LoginUserDto {

    readonly email: string;
    readonly password: string;
}

export class RegistrationUserDto {

    

    readonly email: string;
    readonly username: string;
    readonly password: string;

    
    description: string;

   
    activationLink:string;
}

export class Get2FAUserDto {

    readonly email: string;
    
}

export class GoogleAuthenticator{
    
    readonly email: string;
    readonly tokenFrom2FA: string;
}