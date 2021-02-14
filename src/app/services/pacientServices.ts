import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class pacientsService {

  constructor(private _httpClient: HttpClient) { }

  getPacientsByDoctorId(id: string): Observable<any> {
    return this._httpClient.get<any>(`/api/pacients/${id}`);
  }

}
