"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const microservices_1 = require("@nestjs/microservices");
const auth_service_1 = require("./auth.service");
const fs_1 = require("fs");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
        imports: [microservices_1.ClientsModule.register([
                {
                    name: 'AUTH_SERVICE',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'auth',
                            brokers: ['rc1a-qcqk5g0b44iq8cns.mdb.yandexcloud.net:9091'],
                            ssl: {
                                rejectUnauthorized: false,
                                ca: [(0, fs_1.readFileSync)('/usr/local/share/ca-certificates/Yandex/YandexCA.crt', 'utf-8')],
                            },
                            sasl: {
                                mechanism: 'scram-sha-512',
                                username: 'test',
                                password: 'rootroot'
                            },
                        },
                        consumer: {
                            groupId: 'auth-consumer',
                        },
                    },
                },
            ]),]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map