import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CommandeService } from '../shared/commande.service';
import { PlatService } from '../shared/plat.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  titre: string= '';
  datas: any;
  usePlat: boolean = true;
  constructor(private userService: UserService,private commandeService: CommandeService,private platService: PlatService, private router: Router) { }
  ngOnInit() {
    var commande = "liste des commandes";
    var plat = "liste des plats";
    this.userService.getHomeredirect().subscribe(
      (res:any) => {
        var profil=res['profil'];
        var urlRedirect="/"+profil+"/";
        if (profil == "client") {
          urlRedirect+="plat";
        }
        if (profil == "responsable") {
          urlRedirect+="situation";
        }
        if (profil == "livreur") {
          urlRedirect+="commande";
        }
        if (profil == "restaurant") {
          urlRedirect+="plat";
        }
        let now = new Date();
	      const stop = now.getTime() + 500;
	      while(true) {
		      now = new Date();
		      if(now.getTime() > stop) break;
	      }
        this.router.navigateByUrl(urlRedirect);
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
