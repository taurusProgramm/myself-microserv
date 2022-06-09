import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { LoginUserDto, RegistrationUserDto, Get2FAUserDto, GoogleAuthenticator } from "src/dto/user.dto";
import { CreateUserRequest } from "src/dto/regis-user-request.dto";

@Injectable()
export class AuthService {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
        
    ){}
    
    async registration(userDto: RegistrationUserDto) {
        this.authClient
        .send('create_user', new CreateUserRequest(userDto.email, userDto.username, userDto.password))
        .subscribe(user => {
            
            console.log('user: ',user)
            console.log(`user email is ${user.email}`)  
        })
        
      }

    getAll(){
        this.authClient
        .send('getAll_user', '')
    }
}
