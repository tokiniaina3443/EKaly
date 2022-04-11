import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { EkalyService } from '../service/ekaly.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: EkalyService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.Login();
  }

  Login() {
    this.service
      .Login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((response) => {
        if (response.action == 'success') {
          console.log(response.payload.token);
          this.storage.set('token-ekaly', response.payload.token);
          this.router.navigate(['admin/menu']);
        } else {
          console.log(response.payload.message);
        }
      });
  }
}
