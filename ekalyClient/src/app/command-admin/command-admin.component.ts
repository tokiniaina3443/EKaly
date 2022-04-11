import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { EkalyService } from '../service/ekaly.service';

@Component({
  selector: 'app-command-admin',
  templateUrl: './command-admin.component.html',
  styleUrls: ['./command-admin.component.css'],
})
export class CommandAdminComponent implements OnInit {
  token = null;
  plats = [];

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router,
    private service: EkalyService
  ) {}

  ngOnInit(): void {
    this.ChargerPlats();
  }

  ChargerPlats() {
    this.token = this.storage.get('token-ekaly');
    if (this.token == null) this.router.navigate(['admin/login']);
    else {
      this.service.ListPlat(this.token).subscribe((response) => {
        if (response.action == 'success') {
          this.plats = response.payload;
        }
      });
    }
  }
}
