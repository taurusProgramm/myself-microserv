import { OnModuleInit } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegistrationUserDto } from "src/dto/user.dto";
import { ClientKafka } from '@nestjs/microservices';
export declare class AuthController implements OnModuleInit {
    private authService;
    private readonly authClient;
    constructor(authService: AuthService, authClient: ClientKafka);
    registration(userDto: RegistrationUserDto, res: any): void;
    onModuleInit(): Promise<void>;
    getAll(): void;
    onModuleInitGetAll(): void;
}
