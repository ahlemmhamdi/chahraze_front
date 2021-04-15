import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup=this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])],
    password: ['', Validators.compose([Validators.required,Validators.minLength(6)])]
  });

  public hide:boolean = true;
  
  constructor( 
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private userService: UserService) { }

  ngOnInit() {
   
  }

  submitUser() {
    this.userService.postUser(this.registerForm.value).subscribe({
      next: (response: any) => {
        this.route.url.subscribe(value=>{
        let back_path=value[0].path;
    
         this.snackBar.open(response?.message, 'Close');
         this.router.navigate(['/home']);
        
        });
      },
      error: (error) => {
        this.snackBar.open(error, "Close");
      },
      complete: () => console.log('User Registrtation completed successfully')
    });
  }

}


//TODO: to add minlength 6 Caracters to password form Control
//TODO: to standardize the api response 