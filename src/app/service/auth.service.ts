import { environment } from './../../environments/environment.prod';
import { UsuarioModel } from './../model/UsuarioModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://vozativageneration.herokuapp.com//usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>('https://vozativageneration.herokuapp.com//usuarios/cadastrar', usuario)
  }

  atualizar(usuario: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>('https://vozativageneration.herokuapp.com//usuarios/atualizar', usuario);
  }

  getByIdUsuario(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`https://vozativageneration.herokuapp.com//usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }

  adm() {
    let ok: boolean = false

    if (environment.tipo == 'adm') {
      ok = true
    }

    return ok

  }
}