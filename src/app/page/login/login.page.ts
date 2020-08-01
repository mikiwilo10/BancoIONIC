import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import {  MenuController } from '@ionic/angular';
import { JavaserviceService } from 'src/app/service/javaservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //mk
  usuario:any;
  email:string
  clave:string;
  // ip:string = "192.168.1.12:8080";
  ip:string = "localhost:8080";
  dat:String;
  datos:any={};

  Parametro:String='';
  constructor(
    //mk
    public navCtrl: NavController, 
    private javaservi:JavaserviceService,
    public menuCtrl: MenuController,public router:Router, public http: HttpClient, private alertController: AlertController 
  ) { 
    
    this.Parametro=this.datos.usuario;
    
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
   }
   
  ngOnInit() {
  }



  click() {
   // this.navCtrl.navigateRoot();
    // push('RegisterPage');
    
    console.log("click");
    
    console.log("usuario",this.datos.usuario);
    console.log("clave",this.Parametro=this.datos.usuario);
    
  
  }

  public login2() {

  //   return new Promise(resolve => {
    //http://127.0.0.1:8080/Login/ws/movimientos/admin?usuario=miki&password=cuenca
     this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/admin?usuario='+this.datos.usuario+'&password='+this.datos.clave).subscribe(data => {
       console.log("hola")
     })
      //   if (data === null) {
      //  //   this.presentAlert();
      //   } else {
      //   //  this.router.navigate(['/principal']);
      //   }
      // },
    

  } 

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Credenciales incorrectas',
      buttons: ['OK']
    });

    await alert.present();
  }
  public login() {
  const extra: NavigationExtras= {
    queryParams:{
      em:this.datos.usuario
    }
  };
    return new Promise(resolve => {
      this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/logins?usuario='+this.datos.usuario+'&password='+this.datos.clave).subscribe(data => {
      console.log(data);  
      this.javaservi.CorreoSocio=this.datos.usuario;
      if (data == null) {
          this.presentAlert();
          console.log("aui");  
        } else {
          this.router.navigate(['/cuenta']);
          console.log("toy");  
        }
      }, () => {
        this.presentAlert();
      });
    });
  } 

}