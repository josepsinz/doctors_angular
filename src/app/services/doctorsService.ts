import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class doctorsService {

  constructor(private _httpClient: HttpClient) { }

  getDoctors(): Observable<any[]> {
    return this._httpClient.get<any[]>("/api/doctors");
  }
}
