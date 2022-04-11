import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.CheckAuthentification();
  }

  CheckAuthentification(){
    let token = this.storage.get("token-ekaly");
    if(token == null){
      this.router.navigate(['admin/login']);
    }
    else{
      console.log("navigate to liste restaurants");
    }
  }

}
