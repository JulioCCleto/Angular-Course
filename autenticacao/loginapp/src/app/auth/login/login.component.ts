import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', [Validators.required, Validators.minLength(6)]],
  });

  loading = false;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    const credentials = this.loginForm.value;
    this.loading = true;
    this.authService.login(credentials)
      .subscribe(
        user => {
          console.log(user);
          this.snackBar.open(
            'Logado com sucesso! Bem Vindo ' + user.firstName + '!', 'OK', { duration: 2000 }
          );
          this.router.navigateByUrl('/');
          this.loading = false;
        },
        err => {
          console.log(err);
          this.snackBar.open(
            'Erro ao tentar logar', 'OK', { duration: 2000 });
          this.loading = false;
        }
      )
  }
}
