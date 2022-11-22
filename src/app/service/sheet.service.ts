import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  constructor(private httpClient: HttpClient) {}

  protected API_SHEET: string = 'https://sheetdb.io/api/v1/4jwfp6fu0uivw';
  protected auth = { login: '0v0wkkg5', password: 'yokfnolbnx07psuvsojp' };
  protected encodeAuth = btoa(this.auth.login + ':' + this.auth.password);
  private authorization = `Basic ${this.encodeAuth}`;

  protected headers = new HttpHeaders({'Content-Type': 'application/json', Authorization: this.authorization });

  getItems(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_SHEET}/search`, { headers: this.headers });
  }

  getUltimoId(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_SHEET}/search?nome=&limit=1`, { headers: this.headers });
  }

  getInscritoByNome(nome: any): Observable<any> {
    return this.httpClient.get<any>(`${this.API_SHEET}/search?nome=${nome}`, { headers: this.headers });
  }

  saveItem(id:any, body: any): Observable<any> {
    const requestBody = JSON.stringify(body);
    return this.httpClient.patch<any>(`${this.API_SHEET}/id/${id}`, requestBody, { headers: this.headers });
  }

  deleteItem(id: any): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_SHEET}/item/${id}`, { headers: this.headers });
  }
}


