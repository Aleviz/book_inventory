import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutorService {

  private API_SERVER = "http://localhost:8080/autor/";//Contiene la URL base del servidor donde se encuentra la API

  //Inyeccion de dependencia 
  constructor(private httpClient: HttpClient) { }


  /*
   * Funcion que nos permite obtener una lista de autores haciendo una solicitud 
   * Http GET a la API del servidor 
  */
  public getAllAutores(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

}