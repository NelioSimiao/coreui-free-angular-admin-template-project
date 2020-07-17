export class User {
    constructor(
        public email: string,
        public username: string,
        public token: string,
        public type: string,
        public roles: string[],
    ) { }
}
