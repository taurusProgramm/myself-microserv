import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
// import { LoginUserDto, RegistrationUserDto, Get2FAUserDto, GoogleAuthenticator } from "src/auth/authDto/authUser.dto";

import * as bcrypt from "bcryptjs";
import * as uuid from "uuid";


import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
import {RegistrationUserDto} from "src/dto/user.dto"

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async registration(userDto: RegistrationUserDto) {
        console.debug('u here', userDto)
        
        const candidateOnEmail = await this.findUserByEmail(userDto.email);
        const candidateOnUsername = await this.findUserByUsername(userDto.username);

        if (candidateOnEmail || candidateOnUsername) {
            return new HttpException("Пользователь с таким Email или Username уже существует", HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.createUser({ ...userDto, password: hashPassword});
        // const activationLink = uuid.v4();
        // const user = await this.userServise.createUser({ ...userDto, password: hashPassword, activationLink});
        // let link = `${process.env.API_URL}/auth/activate/${activationLink}`
        // console.log(user);
        
        //await this.mailsendService.sendActivationMail(userDto.email, link);
        // const Tokens = await this.generateToken(user);
        // await this.saveToken(user, Tokens.refresh_token);
        // return Tokens;
        return JSON.stringify(user);
    }

    async findUserByEmail(email: string){
        const user = await this.userModel.findOne({email});
        return user;
    }

    async findUserByUsername(username: string){
        const user = await this.userModel.findOne({username});
        return user;
    }

    async createUser(candidate: RegistrationUserDto){
        const newUser = new this.userModel(candidate);
        return newUser;
        // return newUser.save();
    }

    async getAll()  {
        return await this.userModel.find();
    }

}
