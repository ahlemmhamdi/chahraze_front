import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['',Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])],
    password: ['', Validators.required]
  });;
  public returnUrl: string= "";
  public hide:boolean= false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar:MatSnackBar,
    private authenticationService: AuthenticationService
  ) { 
     // redirect to home if already logged in
     if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
     }
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit() {
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.snackBar.open("Logged in Successufully",'Close')
        },
        error => {
          this.snackBar.open("Failed to login",'Close')
        });
  }

  getErrorMessage(){
    return 'invalid email, try again'
  }

}
