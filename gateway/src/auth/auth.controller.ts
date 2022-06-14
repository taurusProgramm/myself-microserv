import { Body, Controller, Delete, Get, Param, Post, OnModuleInit, Inject, Res } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginUserDto, RegistrationUserDto, Get2FAUserDto, GoogleAuthenticator } from "src/dto/user.dto";
import { ClientKafka } from '@nestjs/microservices';

@Controller('auth')
export class AuthController  implements OnModuleInit {
    constructor(
        private authService: AuthService,
        @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka
        ) {}

// @Post("/login")
// login(@Body() userDto:LoginUserDto) {
//     return this.authService.login(userDto)
// }

@Post("/registration")
registration(@Body() userDto: RegistrationUserDto,@Res() res ) {
    // const a = (b)=>{
    //     res.json(b)
    // }

    this.authService.registration(userDto, res)
}

async onModuleInit(){
    this.authClient.subscribeToResponseOf('create_user');
    await this.authClient.connect();
}

@ApiOperation({ summary: "Получить всех пользователей" })
@Get("/getall")
getAll(){
    return this.authService.getAll()
}

onModuleInitGetAll(){
    this.authClient.subscribeToResponseOf('getAll_user')
}

// @Get("/activate/:link")
// activate(@Param("link") link: string){
//     this.authService.activate(link)
// }

// @Post('/settings')
// get2FA(@Body() data: Get2FAUserDto){
//     return this.authService.get2FA(data)
// }


// @Post('/login/2FA')
// confirm2FA(@Body() candidate: GoogleAuthenticator){
//     return this.authService.confirm2FA(candidate)

// }

// @Delete("/logout/:id")
// logout(@Param("id") id: string) {
//     return this.authService.logout(id);
// }
}
