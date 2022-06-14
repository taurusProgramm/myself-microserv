export class CreateUserRequest {
    constructor(
        // public readonly email: string,
        // public readonly username: string,
        // public readonly password: string
        public readonly user:{
            email: string;
            username: string;
            password: string
        }
        ) {}
    toString() {
        return JSON.stringify({
            email: this.user.email,
            username: this.user.username,
            password:this.user.password,
            });
        }  
  }