import { Component, OnInit } from '@angular/core';
//mk
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  usuario:any;
  email:string
  clave:string;
  // ip:string = "192.168.1.12:8080";
  ip:string = "localhost:8080";
  dat:String;
  datos:any={};
 // http://localhost:8080/Login/ws/movimientos/Updtelogin/{email:String}/{clave:String}
  constructor(public navCtrl: NavController, public router:Router, public http: HttpClient, private alertController: AlertController ) {}

  ngOnInit() {
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'OK!',
      message: 'Cambio Correcto',
      buttons: ['OK']
    });

    await alert.present();
  }
  public login() {
  
    return new Promise(resolve => {
      this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/Updtelogin?email='+this.datos.usuario+'&clave='+this.datos.clave).subscribe(data => {
      console.log(data);  
      if (data =! null) {
          this.presentAlert();
          this.router.navigate(['/menu']);
          console.log("aui");  
        } else {
          this.router.navigate(['/menu']);
          console.log("toy");  
        }
      }, () => {
        this.presentAlert();
      });
    });
  }

}
