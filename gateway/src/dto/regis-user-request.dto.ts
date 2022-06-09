export class CreateUserRequest {
    constructor(
        public readonly email: string,
        public readonly username: string,
        public readonly password: string
        ) {}
    toString() {
        return JSON.stringify({
            email: this.email,
            username: this.username,
            password: this.password,
            });
        }  
  }