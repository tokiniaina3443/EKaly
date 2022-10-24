import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandemereService } from '../../shared/commandemere.service';

@Component({
  selector: 'app-commande-restau',
  templateUrl: './commande-restau.component.html',
  styleUrls: ['./commande-restau.component.scss']
})
export class CommandeRestauComponent implements OnInit {
  p: number = 1;
  term: any;
  datas: any;
  showSuccessMessage: boolean = false;
  serverErrorMessages: string = '';
  constructor(private commandeService: CommandemereService,private router : Router) { }

  ngOnInit(): void {
    this.commandeService.getCommandeMereListR("commander").subscribe(
      (res:any) => {
        this.datas=res['commandemere'];
      },
      err => {
        console.log(err);
      }
    );
  }

  details(idmere: any){
    this.router.navigateByUrl('/commande/details?id='+idmere+'&url=/restaurant/commande');
  }

  preparer(idmere: any){
    this.commandeService.preparerCommande(idmere).subscribe(
      (res:any) => {
        this.showSuccessMessage=true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      },
      err => {
        this.serverErrorMessages ='Something went wrong...We will fix it as soon.';
      }
    );
  }
}
