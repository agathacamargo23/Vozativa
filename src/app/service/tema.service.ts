import { TemaModel } from './../model/TemaModel';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<TemaModel[]> {
    return this.http.get<TemaModel[]>('https://vozativageneration.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<TemaModel> {
    return this.http.get<TemaModel>(`https://vozativageneration.herokuapp.com//tema/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<TemaModel[]> {
    return this.http.get<TemaModel[]>(`https://vozativageneration.herokuapp.com/tema/nome/${nome}`, this.token)
  }

  postTema(tema: TemaModel): Observable<TemaModel> {
    return this.http.post<TemaModel>('https://vozativageneration.herokuapp.com//tema', tema, this.token)
  }

  putTema(tema: TemaModel): Observable<TemaModel> {
    return this.http.put<TemaModel>('https://vozativageneration.herokuapp.com//tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://vozativageneration.herokuapp.com//tema/${id}`, this.token)
  }

}
