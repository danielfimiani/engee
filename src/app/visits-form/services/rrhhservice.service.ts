import { Injectable } from '@angular/core';
import { IPerson } from '../interfaces/Person';
import { Persons , Sectors} from 'src/db/Rrhh';

//Material
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RrhhserviceService {
  Persons : IPerson [];
  Sectors : string [];

  constructor(private _snackBar : MatSnackBar) { 
    this.Persons = Persons;
    this.Sectors = Sectors;
  }

  getSectors() : string [] {
    return this.Sectors;
  }

  getPersonsBySector(sector : string) : IPerson [] {
    let persons = this.Persons.filter(p=>p.sector==sector);
    
    if (persons == undefined) {
      this._snackBar.open("No se encontraron personas en ese sector." , 'Cerrar' , {duration: 3000});
      return []
    }

    return persons;
  }
}
