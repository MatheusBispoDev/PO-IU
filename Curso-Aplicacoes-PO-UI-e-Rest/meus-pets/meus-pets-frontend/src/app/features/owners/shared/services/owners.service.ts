import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Owners } from '../interfaces/owners.model';
import { Owner } from '../interfaces/owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

constructor(private htppClient: HttpClient) {  }

  get(page: number, pageSize: number, filter?: string, fields?: string, sort?: string) : Observable<Owners> {
    const parameters = new HttpParams()
      .append('page', page)
      .append('pageSize', pageSize)
      .append('FILTER', filter ? filter : '')
      .append('FIELDS', fields ? fields : '')
      .append('SORT', sort ? sort : 'id');

    return this.htppClient.get<Owners>(environment.ownersAPI, { params : parameters});
  }

  post(body: Owner): Observable<Owner> {    
    return this.htppClient.post<Owner>(environment.ownersAPI, body);
  }

  getById(id: string): Observable<Owner> {
    return this.htppClient.get<Owner>(`${environment.ownersAPI}/${id}`);
  }

  put(body: Owner): Observable<Owner> {
    return this.htppClient.put<Owner>(`${environment.ownersAPI}/${body.id}`, body);
  }

  delete(id: string): Observable<any> {
    return this.htppClient.delete<any>(`${environment.ownersAPI}/${id}`);
  }

}

