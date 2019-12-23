import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
})

export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService){}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        if (!form.valid) {
            return;
        }

        let authObj: Observable<AuthResponseData>;

        this.isLoading = true;
        const email = form.value.email;
        const password = form.value.password;
        this.error = null;

        if (this.isLoginMode) {
            authObj = this.authService.login(email, password);
        } else {
            authObj = this.authService.signup(email, password);
        }

        authObj.subscribe(
                responseDate => {
                    this.isLoading = false;
                    console.log(responseDate);
                },
                errorMsg => {
                    this.isLoading = false;
                    this.error = errorMsg;
                    console.log(errorMsg);
                }
            );

        form.reset();
    }
}
