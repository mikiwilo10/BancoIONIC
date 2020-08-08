import { Component, OnInit } from '@angular/core';
import { JavaserviceService } from 'src/app/service/javaservice.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage implements OnInit {


  CuentaOrigen: String;
  CuentaDestino: String = '';
  ValosTrsnsferir: String = '';

  constructor(
    private javaservi: JavaserviceService,
    private http: HttpClient,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.CuentaOrigen = this.javaservi.CuentoOrigenSocio;
  }


  public Transferir() {

    //http://localhost:8080/Login/ws/movimientos/transferir?idCuentaOrigen=581181519168&idCuentaDestino=155426733963&cantidad=12.8
    this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/transferir/?idCuentaOrigen=' + this.CuentaOrigen + '&idCuentaDestino=' + this.CuentaDestino + '&cantidad=' + this.ValosTrsnsferir).subscribe(data => {
       
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
