import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { pacientsService } from "../services/pacientServices";
@Component({
  selector: 'app-pacients',
  templateUrl: './pacients.component.html',
  styleUrls: ['./pacients.component.css']
})
export class PacientsComponent implements OnInit {

  doctorId: string = "";
  datos = []
  displayedColumns: string[] = ['pacientId', 'name', 'surname']
  dataSource: any;
  constructor(private _pacientsService: pacientsService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.doctorId = this._route.snapshot.paramMap.get('id') as string
    console.log(this.doctorId)
    this._pacientsService.getPacientsByDoctorId(this.doctorId).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
