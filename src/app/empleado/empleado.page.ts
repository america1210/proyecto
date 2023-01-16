import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ModalController, NavParams, Platform } from '@ionic/angular';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
})
export class EmpleadoPage implements OnInit {
  empleados: any;
  allEmpleados: any;
  idempleado: any;
  nombre: any;
  paterno: any;
  materno: any;
  sexo: any;
  type: any;
  id: any;

  constructor(
    private modalCtrl: ModalController,
    public api: ApiService,
    private navParam: NavParams,
   ) { }

  ngOnInit() {
   this.getempleados();
  }
  public form = [
    { val: 'Masculino', isChecked: false },
    { val: 'Femenino', isChecked: false },
  ];

  getempleados(){
    this.api.get().subscribe((empleados)=>{
      this.empleados = empleados;
      this.allEmpleados = empleados;
    })
  }
  
 async delete(id: any){
  console.log('empleados/' + id );
   await this.api.delete('empleados/' + id).subscribe((response)=>{
    
    this.getempleados();
   })
   
  }


}
