"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequest = void 0;
class CreateUserRequest {
    constructor(email, username, password) {
        this.email = email;
        this.username = username;
        this.password = password;
    }
    toString() {
        return JSON.stringify({
            email: this.email,
            username: this.username,
            password: this.password,
        });
    }
}
exports.CreateUserRequest = CreateUserRequest;
//# sourceMappingURL=regis-user-request.dto.js.map