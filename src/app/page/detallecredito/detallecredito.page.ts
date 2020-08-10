import { Component, OnInit } from '@angular/core';
import { JavaserviceService } from 'src/app/service/javaservice.service';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detallecredito',
  templateUrl: './detallecredito.page.html',
  styleUrls: ['./detallecredito.page.scss'],
})
export class DetallecreditoPage implements OnInit {


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
    this.http.get('http://192.168.1.39:8080/Login/ws/movimientos/DetalleCredito?idcuenta=' + this.CuentaOrigen).subscribe(data => {

      console.log(data); 

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
