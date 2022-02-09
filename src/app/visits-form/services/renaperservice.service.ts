import { Injectable } from '@angular/core';
import { IRenaper } from 'src/app/visits-form/interfaces/Renaper';
import { Renaper } from 'src/db/Renaper';

//Material
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

export class RenaperserviceService {
  Renaper : IRenaper [];
  
  constructor(private _snackBar : MatSnackBar) { 
    this.Renaper = Renaper;
  }

  GetRenaperBySocialNumber (dni :string) : string  {
    
    if (!dni){
      this._snackBar.open("Ingrese un DNI válido." , 'Cerrar' , {duration: 3000});
      return '';
    } 

    let renaper = this.Renaper.find(r=>r.dni==dni);

    if (!renaper){
      this._snackBar.open("No se encontró una persona." , 'Cerrar' , {duration: 3000});
      return '';
    }
    
    return  renaper?.name + ' ' + renaper?.lastName;
  }

}
