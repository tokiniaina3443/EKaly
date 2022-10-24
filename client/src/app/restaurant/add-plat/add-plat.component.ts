import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatService } from 'src/app/shared/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.scss'],
})
export class AddPlatComponent implements OnInit {
  showSuccessMessage: boolean = false;
  serverErrorMessages: string = '';
  platServiceform: PlatService;

  constructor(private platService: PlatService, private router: Router) {
    this.platServiceform = platService;
  }

  ngOnInit(): void {}

  gestionPlat(form: NgForm) {
    this.platService.addPlat(form.value).subscribe((res) => {
      this.router.navigate(['restaurant/plat']);
    });
  }

  resetForm(form: NgForm) {
    this.platService.selectedPlat = {
      _id: '',
      idrestau: '',
      restau: '',
      nom: '',
      prix: 0,
      prixvente: 0,
      visible: true,
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
