import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class LibroService {
  
  //Contiene la URL base del servidor donde se encuentra la API
  private API_SERVER = "http://localhost:8080/libro/"; 
  
  // Variable para almacenar la respuesta de las peticiones HTTP como un Observable.
  private response: Observable<any>;
  
 
  /**
   * El Constructor de la clase LibroService realiza la inyección de dependencias para obtener las funcionalidades de HttpClient y ToastrService.
   * @param httpClient Es el objeto HttpClient que nos proporciona Angular para poder realizar peticiones HTTP.
   * @param toastrSvc Es el objeto ToastrService que nos proporciona Toastr para poder mostrar mensajes emergentes.
   */
  constructor(private httpClient: HttpClient,
    private toastrSvc: ToastrService) { }

  /**
  * Obtiene una lista de libros haciendo una solicitud HTTP GET a la API del servidor.
  * @returns Un Observable que representa la respuesta de la petición HTTP GET.
  */
  public getAllLibros(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }


  /**
  * Desactiva un libro específico enviando una petición HTTP POST a la API del servidor.
  * El libro pasará de estar activo a desactivado y se mostrará un mensaje de éxito o error al usuario.
  * @param libro El objeto que representa el libro a desactivar.
  * @returns Un Observable que representa la respuesta de la petición HTTP POST.
  */
  public desactivar(libro: any): Observable<any> {
    try {
      // Realizar una petición HTTP POST a la API del servidor para desactivar el libro.
      this.response = this.httpClient.post(this.API_SERVER, libro);

      // Mostrar un mensaje de éxito al usuario usando Toastr (suponiendo que se importó y se inyectó correctamente).
      this.toastrSvc.success('El Libro ha sido desactivado exitosamente', 'Book Inventory');
    } catch (error) {
      // Si ocurre un error durante la petición HTTP, mostrar un mensaje de error al usuario usando Toastr.
      this.toastrSvc.error('ERROR el libro no ha sido desactivado, intentelo de nuevo', 'Book Inventory');
    }
    return this.response;
  }

  /**
   * Guarda un nuevo libro o una modificacion del libro, enviando una petición HTTP POST a la API del servidor.
   * @param libro El objeto que representa el libro a guardar.
   * @returns Un Observable que representa la respuesta de la petición HTTP POST.
   */
  public saveLibro(libro: any): Observable<any> {
    try {
      // Realizar una petición HTTP POST a la API del servidor para guardar el libro.
      this.response == this.httpClient.post(this.API_SERVER, libro);

      // Mostrar un mensaje de éxito al usuario usando Toastr (suponiendo que se importó y se inyectó correctamente).
      this.toastrSvc.success('El Libro ha sido guardado exitosamente', 'Book Inventory');
    } catch (error) {
      // Mostrar un mensaje de éxito al usuario usando Toastr (suponiendo que se importó y se inyectó correctamente).
      this.toastrSvc.error('ERROR el libro no ha sido guardado, intentelo de nuevo', 'Book Inventory');
    }
    return this.response;
  }

}