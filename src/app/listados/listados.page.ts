import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ModalController } from '@ionic/angular';
import { PolizaPage } from '../poliza/poliza.page';

@Component({
  selector: 'app-listados',
  templateUrl: './listados.page.html',
  styleUrls: ['./listados.page.scss'],
})
export class ListadosPage  {
  empleados: any;
  allEmpleados: any;
  constructor(
    public api: ApiService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() { 
    this.getempleados();
  }

  
 //llena la lista de la app
getempleados(){
  this.api.get().subscribe((empleados)=>{
    this.empleados = empleados;
    this.allEmpleados = empleados;
  })
}


}
