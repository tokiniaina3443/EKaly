import { Component, OnInit, ViewChildren } from '@angular/core';
import { PlatService } from '../../shared/plat.service';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-plat-restau',
  templateUrl: './plat-restau.component.html',
  styleUrls: ['./plat-restau.component.scss']
})
export class PlatRestauComponent implements OnInit {
  p: number = 1;
  term: any;
  datas: any;
  showSuccessMessage: boolean = false;
  serverErrorMessages: string = '';
  platServiceform: PlatService;
  constructor(private platService: PlatService, private userService: UserService) {
    this.platServiceform = platService;
  }

  ngOnInit(): void {
    this.platService.getPlatList().subscribe(
      (res:any) => {
        this.datas=res['plat'];
      },
      err => {
        console.log(err);
      }
    );
  }
  gestionPlat(form : NgForm){
    this.platService.addPlat(form.value).subscribe(
      res => {
        this.showSuccessMessage=true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
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
  visibilite(indice: any, name: any, visible: boolean, idplat: string) {
    var element = <HTMLInputElement> document.getElementById(name+'_'+indice);
    if (!element.checked) {
      return;
    }
    element.checked = false
    this.platService.setvisible(idplat, visible).subscribe(
      (res:any) => {
        this.showSuccessMessage=true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      },
      err => {
        this.serverErrorMessages = 'Something went wrong...We will fix it as soon.';
      }
    );
  }
  resetForm(form : NgForm){
    this.platService.selectedPlat = {
      _id: '',
      idrestau: '',
      restau: '',
      nom: '',
      prix: 0,
      prixvente: 0,
      visible: true
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
