import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from '../../../shared/commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.scss']
})
export class DetailCommandeComponent implements OnInit {
  datas: any;
  url: string = '';
  constructor(private commandeService: CommandeService,private router : Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.url = queryParams.url;
      this.commandeService.getCommandeList(queryParams.id).subscribe(
        (res:any) => {
          this.datas=res['commande'];
        },
        err => {
          console.log(err);
        }
      );
    })
  }
  returnTo(){
    this.router.navigateByUrl(this.url);
  }
}
