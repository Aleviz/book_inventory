import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AutorService {
  
  //Contiene la URL base del servidor donde se encuentra la API
  private API_SERVER = "http://localhost:8080/autor/";
  
  /**
   * El constructor de la clase AutoService realiza la inyeccion de dependecias para obtener
   * la funcionalidad de HttpClient
   * @param httpClient Es el objeto de HttpClient que nos proporciona Angular para poder realizar las peticiones HTTP
   */ 
  constructor(private httpClient: HttpClient) { }


  /**
  * Obtiene una lista de autores haciendo una solicitud HTTP GET a la API del servidor.
  * @returns Un Observable que representa la respuesta de la petición HTTP GET.
  */
  public getAllAutores(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

}