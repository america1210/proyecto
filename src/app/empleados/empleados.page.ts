import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  empleados: any;
  allEmpleados: any;
  idempleado: any;
  nombres: any;
  nombre: any;
  paterno: any;
  materno: any;
  sexo: any;
  type = 1
  id: any;
  idempleadobd: any;
  apellidop: any;
  apellidom: any;
  sexobd: any;

  constructor(
    public api: ApiService,
   
  ) { }

  ngOnInit() {
    this.getempleados();
  }
  //llena la parte del sexo
  public form = [
    { val: 'Masculino', isChecked: false},
    { val: 'Femenino', isChecked: false},
  ];
//llena la lista de la app
  getempleados(){
    this.api.get().subscribe((empleados)=>{
      this.empleados = empleados;
      this.allEmpleados = empleados;
    })
  }
  //Elimina del listado
  async delete(id: any){
    console.log('empleados/' + id );
     await this.api.delete('empleados/' + id).subscribe((response)=>{
      
      this.getempleados();
     })
     
    }
//funcion para editar los datos
    edit(empleado: any){
      this.type = 2;
      this.idempleado = empleado.idempleado;
      this.nombres = empleado.nombre;
      this.paterno = empleado.apellidop;
      this.materno = empleado.apellidom;
      if(empleado.sexo == "M"){
        this.form[0].isChecked = true;
      }else{
        this.form[1].isChecked = true;
      }
    }
    //Guarda el empleado nuevo o actualiza uno existente
   async save(){
    //Se obtine el valor del Check
     if(this.form[0].isChecked == true){
      this.sexobd = 'M';
     }else{
      this.sexobd = 'F';
     }
    //Si es uno indica que es un registro nuevo
     if(this.type == 1){
      const newempleado = {
        idempleado: this.idempleado,
        nombre: this.nombres,
        apellidop: this.paterno,
        apellidom: this.materno,
        sexo: this.sexobd
       }
       //manda a la api los datos para crear
     await this.api.post('empleados',newempleado).subscribe((result) =>{
        console.log(result);
        this.getempleados();
        this.type = 1;
      });
      console.log(newempleado);
     }else{ //indica que es un registro actualizado
      const newempleado = {
        nombre: this.nombres,
        apellidop: this.paterno,
        apellidom: this.materno,
        sexo: this.sexobd
       }
       //manda a la api los datos para actualizar
       console.log(newempleado);
     await  this.api.put('empleados', this.idempleado,newempleado).subscribe((result) =>{
        console.log(result);
        this.getempleados();
        this.type = 1;
      });
     }
    }
}//Termina la clase
