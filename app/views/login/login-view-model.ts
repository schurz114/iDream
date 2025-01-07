import { Observable } from '@nativescript/core';

export class LoginViewModel extends Observable {
    private _email: string = '';
    private _password: string = '';
    private _errorMessage: string = '';

    constructor() {
        super();
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        if (this._email !== value) {
            this._email = value;
            this.notifyPropertyChange('email', value);
        }
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (this._password !== value) {
            this._password = value;
            this.notifyPropertyChange('password', value);
        }
    }

    get errorMessage(): string {
        return this._errorMessage;
    }

    set errorMessage(value: string) {
        if (this._errorMessage !== value) {
            this._errorMessage = value;
            this.notifyPropertyChange('errorMessage', value);
        }
    }

    onSignIn() {
        // TODO: Implement authentication
        if (!this._email || !this._password) {
            this.errorMessage = 'Please enter both email and password';
            return;
        }
        
        // Mock authentication for now
        this.errorMessage = '';
        console.log('Sign in attempt with:', this._email);
    }

    onSignUp() {
        // TODO: Navigate to sign up page
        console.log('Navigate to sign up');
    }
}