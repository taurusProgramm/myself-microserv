import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from "./auth.service";
import {RegistrationUserDto} from "src/dto/user.dto"

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

@MessagePattern('test')
async registration(data: any) {
    return await this.authService.registration(data.value);
  }

  @MessagePattern('getAll_user')
  getAll(){
    return this.authService.getAll()
  }
}
