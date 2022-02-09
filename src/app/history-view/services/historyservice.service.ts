import { Injectable } from '@angular/core';
import { visistHistory } from 'src/db/visitsHistory';
import { IHistory } from '../interfaces/IHistory';

@Injectable({
  providedIn: 'root'
})
export class HistoryserviceService {
  History: IHistory[]
  constructor() {
    this.History = visistHistory;
  }

  getHistoryBySocialNumber(dni: string): IHistory[] {
    let history = this.History.filter(h => h.dni == dni);
    
    if (!history)
      return []

    return history.sort((a,b) => { return new Date(b.date).getTime() - new Date(a.date).getTime()});
  }
}
