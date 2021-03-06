import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

//Interfaces
import { IHistory } from './interfaces/IHistory';

//Material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history-view',
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent implements AfterViewInit, OnInit{
  @Input() history!: IHistory[];

  displayedColumns: string[] = ['_id','date', 'hour', 'visits', 'delete'];
  dataSource = new MatTableDataSource<IHistory>(this.history);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IHistory>(this.history);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  deleteDialog(history : IHistory){
    if (confirm("¿Estás seguro que se desea eliminar el registro?"))
      this.history = this.history.filter(h=>h!=history);
    
    this.dataSource.data= this.history;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<IHistory>(this.history);
    this.dataSource.paginator = this.paginator;
  }
}
