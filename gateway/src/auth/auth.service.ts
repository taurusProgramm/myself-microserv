import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoginUserDto, RegistrationUserDto, Get2FAUserDto, GoogleAuthenticator } from "src/dto/user.dto";
import { CreateUserRequest } from "src/dto/regis-user-request.dto";

@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
        
    ){}
    
    async registration(userDto: RegistrationUserDto, res) {
        this.authClient
        .send('test', new CreateUserRequest(userDto))
        .subscribe(user => {
            res.json(user)
            console.log('user: ',user)
             
        })
      }

    getAll(){
        this.authClient
        .send('getAll_user', '')
    }
}
