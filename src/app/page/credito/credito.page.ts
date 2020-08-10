import { Component, OnInit } from '@angular/core';
import { JavaserviceService } from 'src/app/service/javaservice.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.page.html',
  styleUrls: ['./credito.page.scss'],
})
export class CreditoPage implements OnInit {

  CuentaOrigen: String;
  DatosSocio: any = [];



  constructor(private javaservi: JavaserviceService,
    private http: HttpClient,
    private alertController: AlertController) { }

  ngOnInit() {
    this.CuentaOrigen = this.javaservi.CuentoOrigenSocio;
    this.Transferir();
  }

  public Transferir() {

    //http://localhost:8080/Login/ws/movimientos/transferir?idCuentaOrigen=581181519168&idCuentaDestino=155426733963&cantidad=12.8
    //this.http.get('http://127.0.0.1:8080/Login/ws/movimientos/Credito?cedula=' + this.CuentaOrigen).subscribe(data => {
    this.http.get('http://35.199.104.83:8080/Banco/ws/movimientos/Credito?cedula=' + this.CuentaOrigen).subscribe(data => {

      //console.log(data); 

      //   var i:number=0;
      this.DatosSocio = data;
      // i++;
      // console.log(this.DatosSocio[i]['idCredito']); 
      // this.javaservi.CuentoOrigenSocio=this.DatosSocio[i]['idCredito'];
      if (data == null) {

        console.log("vacio");
      } else {

        console.log("Con Datos");
      }
    }
    );

  }

}
