import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommandeService } from '../../shared/commande.service';
import { PlatService } from '../../shared/plat.service';
import { Commandefile } from '../../shared/commandefile.model';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {
  p: number = 1;
  term: any;
  datas: any;
  showSuccessMessage: boolean = false;
  serverErrorMessages: string = '';
  id: any;
  quantite: any;
  cf: Commandefile = new Commandefile();
  constructor(private platService: PlatService,private commandeService: CommandeService) {
    this.id = [];
    this.quantite = [];
  }

  ngOnInit(): void {
    this.platService.getPlatListClient().subscribe(
      (res:any) => {
        this.datas=res['plat'];
      },
      err => {
        console.log(err);
      }
    );
  }
  commander(){
    var idplats = [];
    var quantites = [];
    var checkboxes = document.getElementsByName('check');
    for (let index = 0; index < checkboxes.length; index++) {
      if((checkboxes[index] as HTMLInputElement).checked == true){
        let i= (checkboxes[index] as HTMLInputElement).value;
        idplats.push((document.getElementById('id_'+i) as HTMLInputElement).value);
        quantites.push((Number)((document.getElementById('quantite_'+i) as HTMLInputElement).value));
      }
    }
    this.cf.ids = idplats;
    this.cf.quantites = quantites;
    this.commandeService.addCommande(this.cf).subscribe(
      res => {
        this.showSuccessMessage=true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        } else {
          console.log(err.message);
          this.serverErrorMessages = 'Something went wrong...We will fix it as soon.';
        }
      }
    );
  }

}
