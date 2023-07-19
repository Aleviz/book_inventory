import { Component, OnInit } from '@angular/core';
import { LibroService } from '../servicio/libro/libro.service';

@Component({
  selector: 'app-administrar-libro',
  templateUrl: './administrar-libro.component.html',
  styleUrls: ['./administrar-libro.component.css']
})
export class AdministrarLibroComponent implements OnInit {

  libros: any; // Declaración de variable de tipo any(puede almacenar cualquier tipo de dato)
  

  /* 
   * Recibe una instancia del servicio LibroService a través de la inyección de dependencia.
   * Este nos permitira utilizar el servicio para mas adelante poder obtener y mostrar sus datos
  */
  constructor(
    public libroService: LibroService 
    ){}


    /**
     * este metodo nos permite ejecutar el codigo dentro, despues que el componente
     * ha sido inicializado, este codigo nos permitira obtener la lista de libros y luego asignar esta lista
     * a la propiedad libros.
     */
  ngOnInit(): void {
    this.libroService.getAllLibros().subscribe(resp=>{
      this.libros = resp;
    });
  }

}
