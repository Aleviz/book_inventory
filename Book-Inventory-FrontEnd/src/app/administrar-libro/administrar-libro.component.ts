import { Component, OnInit } from '@angular/core';
import { LibroService } from '../servicio/libro/libro.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-administrar-libro',
  templateUrl: './administrar-libro.component.html',
  styleUrls: ['./administrar-libro.component.css']
})
export class AdministrarLibroComponent implements OnInit {

  libros: any; // Declaración de variable de tipo any(puede almacenar cualquier tipo de dato)
  libroForm : FormGroup;
  

  /* 
   * Recibe una instancia del servicio LibroService a través de la inyección de dependencia.
   * Este nos permitira utilizar el servicio para mas adelante poder obtener y mostrar sus datos
  */
  constructor(
    public formBuilder: FormBuilder,
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

    this.libroForm = this.formBuilder.group({
      idLibro: [''],
      nombre: [''],
      autor:[''],
      categoria:[''],
      precio:[''],
      estado:['']
    });
  }

  desactivar(libro){
    this.libroForm.setValue({
      idLibro: libro.idLibro,
      nombre: libro.nombre,
      autor: libro.autor,
      categoria: libro.categoria,
      precio: libro.precio,
      estado: 'desactivado',
    });

    this.libroService.desactivar(this.libroForm.value).subscribe(res => {
     this.libros = this.libros.filter(libro1 => res.idLibro!=libro1.idLibro);
    
     if(res == true){
     this.libros.pop(libro);
    }
    })
  }

}
