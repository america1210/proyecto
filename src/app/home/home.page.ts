import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
poliza: any;
empleado: any;
inventarios: any;
Allinventarios: any;
tipo1 = 'I';
id: any;
desc: any;
can: any;
idsku: any;
sku: any;
cantidad: any;
idemp: any;
idpol: any;
tipo: any;
total: any;
idpoliza: any;
descripcion: any;
idempleado: any;
fecha: any;


  constructor(
    public api: ApiService,
  ) {}

  ngOnInit() {
   this.getinventario();
   this.getempleado();
   this.getpoliza();
  }
  //Se obtiene los empleados para saber el total de empleados
  getempleado(){
    this.api.get().subscribe((empleado)=>{
      this.empleado = empleado;
    })
  }
//Se obtiene las polizas para saber el total
   getpoliza(){
     this.api.getPol().subscribe((poliza)=>{
       this.poliza = poliza;
     })
   }
   //Se obtiene el inventario para mostrarse en listado
  getinventario(){
    this.api.getInv().subscribe((inventarios)=>{
      this.inventarios = inventarios;
      this.Allinventarios = inventarios;
    })
  }
//Funcion para guardar
  async save(){
    //Se obtiene el cuerpo para guardar los datos de inventario
    const newinventario = {
      idsku: this.id,
      sku: this.desc,
      tipo: this.tipo1,
      cantidad: this.can
     }
     const newpoliza = {
      idpoliza: this.idpol,
      descripcion: "Inicial",
      tipo: this.tipo1,
      idempleado: this.idemp,
      idsku: this.id,
      cantidad: this.can
     }
     const fec = new Date();
     const newmovimiento = {
      idsku: this.id,
      idpoliza: this.idpol,
      idempleado: this.idemp,
      tipo: this.tipo1,
      fecha: fec.toISOString(),
      cantidad: this.can
     }
     await this.api.post('inventarios',newinventario).subscribe((result) =>{
      console.log(result);
      
    });
    await this.api.post('polizas',newpoliza).subscribe((result) =>{
      console.log(result);
    
    });
    await this.api.post('movimientos',newmovimiento).subscribe((result) =>{
      console.log(result);

    });
     console.log(newinventario);
     console.log(newpoliza);
     console.log(newmovimiento);
     this.getinventario();
     this.limpiar();
  }
//Se obtiene el total de codigos de inventario
  totalre(){
    if(this.inventarios == null)
    this.id = 1;
    else
    this.id = this.inventarios.length + 1;
  }
  //Se obtiene el total de codigo de empleados
  totalemp(){
    this.idemp = this.empleado.length + 1;
  }
  //Se obtiene el total de codigo de poliza
  totalpol(){
    if(this.poliza == null)
    this.idpol = 1;
    else
    this.idpol = this.poliza.length + 1;
  }

  limpiar(){
    this.id = '';
    this.desc = '';
    this.idemp = '';
    this.idpol = '';
    this.can = '';
  }
}
