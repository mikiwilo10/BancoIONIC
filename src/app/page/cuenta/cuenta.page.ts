import { Component, OnInit, Inject, Input } from '@angular/core';
//miki
import {  MenuController, NavParams, NavController, LoadingController } from '@ionic/angular';
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
  data:any=[];
  CorreoSocio:String;

  correo='';
  cedula='0302603493';

  constructor(
    //mk
    private http: HttpClient,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private ruta: ActivatedRoute,
    private loadingController: LoadingController,
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
   // this.getApiJAVA();
   this.login();
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

  CuentaSocio(){
    
  }

  doRefresh(event){
    
    setTimeout(() => {
      this.login();
      event.target.complete();
    },1500);
  }

  public login() {
   
     
  this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/CuentaSocio?cedula='+this.cedula).subscribe(data => {
      console.log(data);  
      this.data=data;
      
        if (data == null) {
           
            console.log("aui");  
          } else {
           
            console.log("toy");  
          }
        }
        );
 
    } 


}
