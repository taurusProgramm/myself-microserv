import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { isEmail, IsNotEmpty, Length, Matches } from "class-validator";

export class LoginUserDto {

    @ApiProperty({ description: "Email", example: "user@mail.ru" })
    @IsNotEmpty({ message: "Введите email" })
    readonly email: string;
    
    @IsNotEmpty({ message: "Введите пароль" })
    @ApiProperty({ description: "Пароль пользователя", type: String})
    readonly password: string;
}

export class RegistrationUserDto {

    
    @ApiProperty({ description: "Email", example: "user@mail.ru" })
    @IsNotEmpty({ message: "Введите email" })
    email: string;

    @Length(4, 16)
    @IsNotEmpty({ message: "Необходимо имя пользователя" })
    @ApiProperty({ description: "Имя пользователя", example: "taurus" })
    readonly username: string;

    @Length(4, 16)
    // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    @IsNotEmpty({ message: "Введите пароль" })
    @ApiProperty({ description: "Пароль пользователя", type: String, minLength: 4, maxLength: 16 })
    readonly password: string;

    @ApiPropertyOptional({ description: "Рассказать о себе", type: String })
    description: string;

    @ApiPropertyOptional({ description: "Ссылка активации", type: String })
    activationLink:string;
}

export class Get2FAUserDto {

    @ApiProperty({ description: "Имя пользователя", example: "taurus" })
    @IsNotEmpty({ message: "Необходимо имя пользователя" })
    readonly email: string;
    
}

export class GoogleAuthenticator{
    @ApiProperty({ description: "Email", example: "user@mail.ru" })
    @IsNotEmpty({ message: "Введите email" })
    readonly email: string;

    @IsNotEmpty({ message: "Введите код из приложения" })
    readonly tokenFrom2FA: string;
}