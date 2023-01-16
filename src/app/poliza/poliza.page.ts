import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.page.html',
  styleUrls: ['./poliza.page.scss'],
})
export class PolizaPage {
  poliza: any;
  idpol: any;
  idemp: any;
  id: any;
  can: any;
  tipos: any
  idpoliza: any;
  descripcion: any;
  tipo: any;
  idempleado: any;
  idsku: any;
  cantidad: any;
  dec: any;
  fecha: any;
  itemSelected: any;
  list: any;
  users: any;
 
  constructor(
    public api: ApiService,
    
  ) { 
   
  }

  ngOnInit() {
    this.getpoliza();
    
  }

  totalpol(){
    if(this.poliza == null)
    this.idpol = 1;
    else
    this.idpol = this.poliza.length + 1;
  }
//Se obtiene las polizas para saber el total
getpoliza(){
  this.api.getPol().subscribe((poliza)=>{
    this.poliza = poliza;
  })
}

async save(){
  const fec = new Date();
  const newpoliza = {
    idpoliza: this.idpol,
    descripcion: this.dec,
    tipo: this.itemSelected,
    idempleado: this.idemp,
    idsku: this.id,
    cantidad: this.can
  }
  const newmovimiento = {
    idsku: this.id,
    idpoliza: this.idpol,
    idempleado: this.idemp,
    tipo: this.itemSelected,
    fecha: fec.toISOString(),
    cantidad: this.can
  }
  await this.api.post('polizas',newpoliza).subscribe((result) =>{
    console.log(result);
  
  });
  await this.api.post('movimientos',newmovimiento).subscribe((result) =>{
    console.log(result);

  });
}


compareFn(option1: any, option2: any) {
    return option1.value === option2.value;
  }


}
