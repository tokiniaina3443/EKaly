import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfocommandeService } from '../../shared/infocommande.service';

@Component({
  selector: 'app-situation-resp',
  templateUrl: './situation-resp.component.html',
  styleUrls: ['./situation-resp.component.scss']
})
export class SituationRespComponent implements OnInit {
  datas: any;
  sommes: any = 0;
  date: any;
  constructor(private infocommandeService: InfocommandeService,private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.date = queryParams.date;
    });
    if (undefined == this.date) {
      this.date=this.getCurrentDate();
    }
    this.infocommandeService.getInfoCommandeListByrestau(this.date).subscribe(
      (res:any) => {
        this.datas=res['infocommande'];
        this.sommes= this.somme(this.datas);
      },
      err => {
        console.log(err);
      }
    );
  }

  filter() {
    var inputDate = document.getElementById('date');
    this.date=(inputDate as HTMLInputElement).value;
    this.router.navigateByUrl('/responsable/situation?date='+this.date).then(() => {
      window.location.reload();
    });
  }
  getCurrentDate(){
    var date = new Date();
    var month = date.getMonth() + 1;
    var strmonth = ''+month;
    var dat = date.getDate();
    var strdat = ''+dat;
    if (month < 10) strmonth = '0'+month;
    if (dat < 10) strdat = '0'+dat;

    return date.getFullYear() + '-' + strmonth + '-' + strdat;
  }
  somme(data: any){
    var result=0;
    for (let index = 0, length = data.length; index < length; index += 1) {
      result = result + data[index].benefice;
    }
    return result;
  }
}
