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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthenticator = exports.Get2FAUserDto = exports.RegistrationUserDto = exports.LoginUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class LoginUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Email", example: "user@mail.ru" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Введите email" }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Введите пароль" }),
    (0, swagger_1.ApiProperty)({ description: "Пароль пользователя", type: String }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
exports.LoginUserDto = LoginUserDto;
class RegistrationUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Email", example: "user@mail.ru" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Введите email" }),
    __metadata("design:type", String)
], RegistrationUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Length)(4, 16),
    (0, class_validator_1.IsNotEmpty)({ message: "Необходимо имя пользователя" }),
    (0, swagger_1.ApiProperty)({ description: "Имя пользователя", example: "taurus" }),
    __metadata("design:type", String)
], RegistrationUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.Length)(4, 16),
    (0, class_validator_1.IsNotEmpty)({ message: "Введите пароль" }),
    (0, swagger_1.ApiProperty)({ description: "Пароль пользователя", type: String, minLength: 4, maxLength: 16 }),
    __metadata("design:type", String)
], RegistrationUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Рассказать о себе", type: String }),
    __metadata("design:type", String)
], RegistrationUserDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: "Ссылка активации", type: String }),
    __metadata("design:type", String)
], RegistrationUserDto.prototype, "activationLink", void 0);
exports.RegistrationUserDto = RegistrationUserDto;
class Get2FAUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Имя пользователя", example: "taurus" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Необходимо имя пользователя" }),
    __metadata("design:type", String)
], Get2FAUserDto.prototype, "email", void 0);
exports.Get2FAUserDto = Get2FAUserDto;
class GoogleAuthenticator {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Email", example: "user@mail.ru" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Введите email" }),
    __metadata("design:type", String)
], GoogleAuthenticator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Введите код из приложения" }),
    __metadata("design:type", String)
], GoogleAuthenticator.prototype, "tokenFrom2FA", void 0);
exports.GoogleAuthenticator = GoogleAuthenticator;
//# sourceMappingURL=user.dto.js.map