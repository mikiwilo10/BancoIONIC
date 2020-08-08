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

  usuario:string='';
  //email:string
  clave:string='';
  // ip:string = "192.168.1.12:8080";
  ip:string = "localhost:8080";
  dat:String;
  datos:any={};


  persona={
    email:'',
    pass:''
  }
  
 // http://localhost:8080/Login/ws/movimientos/Updtelogin/{email:String}/{clave:String}
  constructor(public navCtrl: NavController, public router:Router, public http: HttpClient, private alertController: AlertController ) {}

  ngOnInit() {
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Actualizar Contraseña',
      message: 'Esta Seguro de Realizar el Cambio?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
           // this.router.navigate(['/cuenta']);
           this.usuario='';
              this.clave='';
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            // if (this.usuario == '' || this.clave == '') {
            //   console.log('no hay valores');
            //   this.usuario='';
            //   this.clave='';
              
            // } else {
             console.log('Confirm Okay');
            this.actualizar();
           this.usuario='';
               this.clave='';
            // }
          
          }
        }
      ]
    });

    await alert.present();
  }




  public actualizar() {
  
    return new Promise(resolve => {

      this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/Updtelogin?email='+this.usuario+'&clave='+this.clave).subscribe(data => {
      console.log(data);  
     
      // if (data =! null) {
      //     this.presentAlert();
      //     this.router.navigate(['/cuenta']);
      //     console.log("aui");  
      //   } else {
      //     this.router.navigate(['/cuenta']);
      //     console.log("toy");  
      //   }

        
      }, () => {
       // this.presentAlert();
      }
      );
    });
  }

  sendMessage(){
    console.log("formulario");
  }

  actualizarClave(){
    if (this.usuario == '' || this.clave == '') {
      console.log('no hay valores');
      this.usuario='';
      this.clave='';
      this.cancelar();

    } else {
       this.presentAlert();
      // this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/Updtelogin?email='+this.usuario+'&clave='+this.clave).subscribe(data => {
      //   console.log(data);  
       
      // });
    //console.log('Confirm Okay');
   // this.actualizar();
    // this.usuario='';
    //   this.clave='';
    }

   
  }


  async cancelar() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Debe llenar todos los campos',
      buttons: ['Aceptar']
    });

    await alert.present();
  }


  
}
