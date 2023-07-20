import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LibroService {

  private API_SERVER = "http://localhost:8080/libro/";//Contiene la URL base del servidor donde se encuentra la API

  //Inyeccion de dependencia 
  constructor(private httpClient: HttpClient) { }

   /*
   * Funcion que nos permite obtener una lista de libros haciendo una solicitud 
   * Http GET a la API del servidor 
  */
  public getAllLibros(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public desactivar(libro:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER, libro);
  }

  
}