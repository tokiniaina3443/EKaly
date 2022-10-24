import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandemereService } from '../../shared/commandemere.service';

@Component({
  selector: 'app-commande-livreur',
  templateUrl: './commande-livreur.component.html',
  styleUrls: ['./commande-livreur.component.scss']
})
export class CommandeLivreurComponent implements OnInit {
  p: number = 1;
  term: any;
  datas: any;
  showSuccessMessage: boolean = false;
  serverErrorMessages: string = '';
  constructor(private commandeService: CommandemereService,private router : Router) { }

  ngOnInit(): void {
    this.commandeService.getCommandeMereList("preparer").subscribe(
      (res:any) => {
        this.datas=res['commandemere'];
      },
      err => {
        console.log(err);
      }
    );
  }

  livrer(idmere: any){
    this.commandeService.livrerCommande(idmere).subscribe(
      (res:any) => {
        this.showSuccessMessage=true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      },
      err => {
        this.serverErrorMessages ='Something went wrong...We will fix it as soon.';
      }
    );
  }
  details(idmere: any){
    this.router.navigateByUrl('/commande/details?id='+idmere+'&url=/livreur/commande');
  }
}
