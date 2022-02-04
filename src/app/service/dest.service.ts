import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Designation } from '../Model/designation';

@Injectable({
  providedIn: 'root'
})
export class DestService {
  apiurl = 'https://localhost:44308/designation'

  constructor(private http: HttpClient) {

  }

  private _refreshrequired = new Subject<void>();

  get Refreshrequired() {
    return this._refreshrequired;
  }

  GetAll(): Observable<object> {
    return this.http.get(this.apiurl);
  }
  GetbyCode(code: any): Observable<Designation> {
    return this.http.get<Designation>(this.apiurl + '/' + code);
  }
  Save(inputdata: any) {
    return this.http.post(this.apiurl, inputdata).pipe(
      tap(() => {
        this.Refreshrequired.next();

      })
    );
  }
}
