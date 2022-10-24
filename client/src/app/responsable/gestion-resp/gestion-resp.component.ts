import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-gestion-resp',
  templateUrl: './gestion-resp.component.html',
  styleUrls: ['./gestion-resp.component.scss']
})
export class GestionRespComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  p: number = 1;
  term: any;
  datas: any;
  showSuccessMessage: boolean = false;
  serverErrorMessages: string = '';
  userServiceform: UserService;
  constructor(private userService: UserService) {
    this.userServiceform = userService;
  }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(
      (res:any) => {
        this.datas=res['user'];
      },
      err => {
        console.log(err);
      }
    );
  }
  sign(form : NgForm){

    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage=true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }else {
          this.serverErrorMessages = 'Something went wrong...We will fix it as soon.';
        }
      }
    );
    window.location.reload();
  }

  resetForm(form : NgForm){
    this.userService.selectedUser = {
      profil: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
