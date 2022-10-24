import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandemereService } from '../../shared/commandemere.service';
@Component({
  selector: 'app-commande-resp',
  templateUrl: './commande-resp.component.html',
  styleUrls: ['./commande-resp.component.scss']
})
export class CommandeRespComponent implements OnInit {
  p: number = 1;
  term: any;
  datas: any;
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
  details(idmere: any){
    this.router.navigateByUrl('/commande/details?id='+idmere+'&url=/responsable/commande');
  }
}
