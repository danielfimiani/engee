import { formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//Interfaces
import { IPerson } from './interfaces/Person';
import { IHistory } from '../history-view/interfaces/IHistory';

//Services
import { RenaperserviceService } from './services/renaperservice.service';
import { RrhhserviceService } from './services/rrhhservice.service';
import { HistoryserviceService } from '../history-view/services/historyservice.service';

@Component({
  selector: 'app-visits-form',
  templateUrl: './visits-form.component.html',
  styleUrls: ['./visits-form.component.css'],
})

export class VisitsFormComponent implements OnInit {

  ngOnInit(): void {
    this.visitForm.get("visitSector")?.valueChanges.subscribe(sector => {
      this.visitPersons = this._rrhhService.getPersonsBySector(sector)
    });
  }

  visitForm = new FormGroup({
    visitDni: new FormControl(''),
    visitSector: new FormControl([]),
    visitPerson: new FormControl([], [Validators.required]),
  });

  visitName: string
  visitDate : Date
  visitHour : string
  visistSectors: string[];
  visitPersons: IPerson[];
  visitHistory: IHistory[];

  constructor(private _renaperService: RenaperserviceService, private _rrhhService: RrhhserviceService, private _historyService: HistoryserviceService) {
    this.visitName = '';
    this.visitDate = new Date();
    this.visitHour = formatDate(new Date(),'HH:mm:ss a','en');
    this.visistSectors = _rrhhService.getSectors();
    this.visitPersons = [];
    this.visitHistory = [];
  }

  getPerson() {
    let dni = this.visitForm.get('visitDni')?.value;
    this.visitHistory = [];
    this.visitName = this._renaperService.GetRenaperBySocialNumber(dni);

    if (!this.visitName)
      this.visitForm.get('visitDni')?.setValue('');
    else
      this.visitHistory = this._historyService.getHistoryBySocialNumber(dni);
  }

  logVisit() {
    let person = this.visitForm.get('visitPerson')?.value;
    let dni = this.visitForm.get('visitDni')?.value;

    let item = {date: this.visitDate , hour : this.visitHour , visits : person.name + ' ' + person.lastName , dni : dni.toString()};
    this.visitHistory = [...this.visitHistory , item];
    this.visitHistory = this.visitHistory.sort((a,b) => { return new Date(b.date).getTime() - new Date(a.date).getTime()});
  }
}
