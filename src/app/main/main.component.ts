import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { doctorsService } from '../services/doctorsService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = ['doctorId', 'name', 'surname', 'speciality']
  dataSource: any;

  constructor(private _doctorsService: doctorsService, private _router: Router) {
  }
  ngOnInit(): void {
    this._doctorsService.getDoctors().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

  onRowClicked(row: any) {
    this._router.navigate(['/pacients', row.DoctorId])
  }

}
