import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {

  //Contiene la URL base del servidor donde se encuentra la API
  private API_SERVER = "http://localhost:8080/categoria/";

  /**
   * El constructor de la clase CategoriaService realiza la inyeccion de dependecias para obtener
   * la funcionalidad de HttpClient
   * @param httpClient Es el objeto de HttpClient que nos proporciona Angular para poder realizar las peticiones HTTP
   */ 
  constructor(private httpClient: HttpClient) { }

 /**
  * Obtiene una lista de categorias haciendo una solicitud HTTP GET a la API del servidor.
  * @returns Un Observable que representa la respuesta de la petición HTTP GET.
  */
  public getAllCategorias(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

}