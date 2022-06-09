"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const regis_user_request_dto_1 = require("../dto/regis-user-request.dto");
let AuthService = class AuthService {
    constructor(authClient) {
        this.authClient = authClient;
    }
    async registration(userDto) {
        let user = this.authClient
            .send('create_user', new regis_user_request_dto_1.CreateUserRequest(userDto.email, userDto.username, userDto.password))
            .subscribe(user => {
            console.log('user: ', user);
            console.log(`user email is ${user.email}`);
        });
        await console.debug('here: ', user);
    }
    getAll() {
        this.authClient
            .send('getAll_user', '');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map