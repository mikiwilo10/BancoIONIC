import { Component, OnInit, Inject, Input } from '@angular/core';
//miki
import {  MenuController, NavParams, NavController } from '@ionic/angular';
import { JavaserviceService } from '../../service/javaservice.service';
import { HttpClient } from '@angular/common/http';
import  { LoginPage }from '../login/login.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage  {

  apijava: any; 
  Characters:any=[];

  CorreoSocio:String;

  correo='';
  constructor(
    //mk
    private http: HttpClient,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private ruta: ActivatedRoute,
    
    private javaservi:JavaserviceService
  ) {
   
    // this.ruta.queryParams.subscribe(params => {
    //   //console.log(params)
    //   this.correo=params.em;
    //   console.log("ppp"+this.correo)
    // });

    this.CorreoSocio= this.javaservi.CorreoSocio;
    console.log("aqui va el socio"+this.CorreoSocio)

   }

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
  //  console.log("hola" +this.datos.usuario);
   // this.Java=javaa;
    //console.log(this.Java.nombre);
    //  console.log("emelec");
   })
  }

}
