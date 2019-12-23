import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}

    signup(email: string, password: string) {
        // tslint:disable-next-line: max-line-length
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD7m323GxbS8qaWTtQcLtINj2sDmHd_COU',
            {
                email,
                password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        // tslint:disable-next-line: max-line-length
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7m323GxbS8qaWTtQcLtINj2sDmHd_COU',
        {
            email,
            password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An error occurred';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        } else {
            switch (errorRes.error.error.message) {
                case 'EMAIL_EXISTS':
                    errorMessage = 'This email already exists';
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'Email not found';
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = 'The password is invalid';
                    break;
            }
            return throwError(errorMessage);
        }
    }
}
