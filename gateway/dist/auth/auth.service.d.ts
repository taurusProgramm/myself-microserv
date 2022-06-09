import { ClientKafka } from '@nestjs/microservices';
import { RegistrationUserDto } from "src/dto/user.dto";
export declare class AuthService {
    private readonly authClient;
    constructor(authClient: ClientKafka);
    registration(userDto: RegistrationUserDto): Promise<void>;
    getAll(): void;
}
