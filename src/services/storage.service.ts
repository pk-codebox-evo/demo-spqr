
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export class StorageService {

    private _token:string;

    get token() {
        if (!this._token) {
            this._token = localStorage.getItem('token');
        }

        if (!this._token) {
            this._token = this.generateToken();

            localStorage.setItem('token', this._token);
        }

        return this._token;
    }

    constructor() {}

    generateToken() {
        let token = "";
        for (let i=0; i < 30; ++i)
            token += CHARS.charAt(Math.floor(Math.random() * CHARS.length));

        return token;
    }
}