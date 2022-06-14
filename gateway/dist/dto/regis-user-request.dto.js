"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequest = void 0;
class CreateUserRequest {
    constructor(user) {
        this.user = user;
    }
    toString() {
        return JSON.stringify({
            email: this.user.email,
            username: this.user.username,
            password: this.user.password,
        });
    }
}
exports.CreateUserRequest = CreateUserRequest;
//# sourceMappingURL=regis-user-request.dto.js.map