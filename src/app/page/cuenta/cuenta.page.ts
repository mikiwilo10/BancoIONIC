import { Component, OnInit } from '@angular/core';
//miki
import {  MenuController } from '@ionic/angular';
import { JavaserviceService } from '../../service/javaservice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage  {

  apijava: any; 
  Characters:any=[];
  constructor(
    //mk
    public http: HttpClient, public menuCtrl: MenuController,
    private javaservi:JavaserviceService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
  ngOnInit() : void{
    this.getApiJAVA();
  }



  getApiJAVA() {
    this.javaservi.getAPIJAVA().subscribe(javaa => {
    this.Characters=javaa;
    console.log(this.Characters);
   // this.Java=javaa;
    //console.log(this.Java.nombre);
    //  console.log("emelec");
   })
  }

}
