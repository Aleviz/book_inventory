import { Component, OnInit } from '@angular/core';
import { LibroService } from '../servicio/libro/libro.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutorService } from '../servicio/autor/autor.service';
import { CategoriaService } from '../servicio/categoria/categoria.service';

@Component({
  selector: 'app-administrar-libro',
  templateUrl: './administrar-libro.component.html',
  styleUrls: ['./administrar-libro.component.css']
})
export class AdministrarLibroComponent implements OnInit {

  libros: any; // Declaración de variable de tipo any(puede almacenar cualquier tipo de dato)
  libroForm: FormGroup;
  autores: any;
  categorias: any;


  /* 
   * Recibe una instancia del servicio LibroService a través de la inyección de dependencia.
   * Este nos permitira utilizar el servicio para mas adelante poder obtener y mostrar sus datos
  */
  constructor(
    public formBuilder: FormBuilder,
    public libroService: LibroService,
    public autorService: AutorService,
    public categoriaService: CategoriaService,
    private modal: NgbModal,
  ) { }


  /**
   * este metodo nos permite ejecutar el codigo dentro, despues que el componente
   * ha sido inicializado, este codigo nos permitira obtener la lista de libros y luego asignar esta lista
   * a la propiedad libros.
   */
  ngOnInit(): void {
   

    this.libroForm = this.formBuilder.group({
      idLibro: [''],
      nombre: ['',Validators.required],
      autor: this.formBuilder.group({
        idAutor: ['',Validators.required],
        nombre: ['',Validators.required],
        fechaNacimiento: ['',Validators.required],
        pais: ['',Validators.required]
      }),
      categoria: this.formBuilder.group({
        idCategoria: ['',Validators.required],
        nombre: ['',Validators.required],
        archivo: ['',Validators.required]
      }),
      precio: ['',Validators.required],
      estado: ['']
    });

    this.autorService.getAllAutores().subscribe(resp => {
      this.autores = resp;
    });

    this.categoriaService.getAllCategorias().subscribe(resp => {
      this.categorias = resp;
    });

    this.libroService.getAllLibros().subscribe(resp => {
      this.libros = resp;
    });
  }

  desactivar(libro) {
    this.libroForm.setValue({
      idLibro: libro.idLibro,
      nombre: libro.nombre,
      autor: libro.autor,
      categoria: libro.categoria,
      precio: libro.precio,
      estado: 'desactivado',
    });

    this.libroService.desactivar(this.libroForm.value).subscribe(res => {
      this.libros = this.libros.filter(libro1 => res.idLibro != libro1.idLibro);

      if (res == true) {
        this.libros.pop(libro);
      }
    })
  }

  openForm(contenido) {
    this.modal.open(contenido, { size: 'lg' });
  }
  guardar() {
      this.libroService.saveLibro(this.libroForm.value).subscribe(res => {
        this.libroForm.reset();
        this.libroService.getAllLibros().subscribe(updatedLibros => {
          this.libros = updatedLibros;
        }); 
        this.modal.dismissAll();
      })
    
  }

  editar(contenido, libro){
    this.libroForm.setValue({
      
      idLibro: libro.idLibro,
      nombre: libro.nombre,
      autor: {idAutor:libro.autor.idAutor, nombre:libro.autor.nombre, fechaNacimiento:libro.autor.fechaNacimiento, pais:libro.autor.pais},
      categoria: {idCategoria:libro.categoria.idCategoria, nombre:libro.categoria.nombre, archivo:libro.categoria.archivo},
      precio: libro.precio,
      estado: libro.estado,
    });

    this.modal.open(contenido,{size:'lg'});
  }



}
