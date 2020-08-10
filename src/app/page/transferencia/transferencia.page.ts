import { Component, OnInit } from '@angular/core';
import { JavaserviceService } from 'src/app/service/javaservice.service';
import { HttpClient } from '@angular/common/http';
import { AlertController, MenuController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage implements OnInit {


  CuentaOrigen: String;
  CuentaDestino: String = '';
  ValosTrsnsferir: String = '';
  private loading;

  constructor(
    private javaservi: JavaserviceService,
    private http: HttpClient, private loadingController: LoadingController,
    public menuCtrl: MenuController,public router:Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.CuentaOrigen = this.javaservi.CuentoOrigenSocio;
  }

  myoading() {
    this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Realizando Transferencia'
    }).then((overlay => {
      this.loading = overlay;
      this.loading.present();
    }));
    setTimeout(() => {
      this.loading.dismiss();
     // this.router.navigate(['/login']);
    }, 1500);

  }

  public Transferir() {

//this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/transferir/?idCuentaOrigen=' + this.CuentaOrigen + '&idCuentaDestino=' + this.CuentaDestino + '&cantidad=' + this.ValosTrsnsferir).subscribe(data => {
  this.http.get('http://35.199.104.83:8080/Banco/ws/movimientos/transferir/?idCuentaOrigen=' + this.CuentaOrigen + '&idCuentaDestino=' + this.CuentaDestino + '&cantidad=' + this.ValosTrsnsferir).subscribe(data => {
         
      if (data == null) {

        console.log("vacio");
      } else {

        console.log("Con Datos");
      }
    }
    );

  }

  Transferencia() {
    if (this.CuentaDestino == '' || this.ValosTrsnsferir == '') {
      console.log('no hay valores');
      this.CuentaDestino = '';
      this.ValosTrsnsferir = '';
      this.cancelar();

    } else {
      this.presentAlert();

    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Transferencia Bancaria',
      message: 'Esta Seguro de Realizar la Transferencia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');

            this.CuentaDestino = '';
            this.ValosTrsnsferir = '';
          }
        }, {
          text: 'Aceptar',
          handler: () => {

            console.log('Confirm Okay');
            this.myoading();
            this.Transferir();
            this.CuentaDestino = '';
            this.ValosTrsnsferir = '';


          }
        }
      ]
    });

    await alert.present();
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
