import { Component, OnInit, TemplateRef } from '@angular/core';
import { LibroService } from '../servicio/libro/libro.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AutorService } from '../servicio/autor/autor.service';
import { CategoriaService } from '../servicio/categoria/categoria.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject} from 'rxjs';


@Component({
  selector: 'app-administrar-libro',
  templateUrl: './administrar-libro.component.html',
  styleUrls: ['./administrar-libro.component.css', './administrar-libro.component.scss']
})
export class AdministrarLibroComponent implements OnInit {

  libros: any;// Variable de tipo any, esta variable almacenara una lista de libros obtenida mediante una solicitud HTTP al servidor
  libroForm: FormGroup; // Variable de tipo FormGroup, representa el formulario de libro para su edicion o creacion 
  autores: any; // Variable de tipo any, esta variable almacenara una lista de autores obtenida mediante una solicitud HTTP al servidor
  categorias: any;// Variable de tipo any, esta variable almacenara una lista de categorias obtenida mediante una solicitud HTTP al servidor
  pageActual: number = 1;
  private modalRef: NgbModalRef;
  mensaje: string;
  cambio:number;

  bsModalRef: BsModalRef;
  resultSubject: Subject<boolean> = new Subject<boolean>();



  /**
   * El constructor del componente AdministrarLibroComponent realiza la inyeccion de dependecias para obtener 
   * las funcionalidades necesarias para nuestra aplicacion
   * @param formBuilder es el objeto de FormBuilder proporcionado por Angular para construir formularios
   * @param libroService es el objeto del servicio LibroService proporciona las funcionalidades realacionadas con los libros y su interaccion con el servidor
   * @param autorService es el objeto del servicio AutorService proporciona las funcionalidades realacionadas con los autores y su interaccion con el servidor 
   * @param categoriaService es el objeto del servicio CategoriaService proporciona las funcionalidades realacionadas con las categorias y su interaccion con el servidor 
   * @param modal es el objeto de NgbModal proporcionado por NgbModal para abrir ventanas emergentes es decir modals
   */
  constructor(
    public formBuilder: FormBuilder,
    public libroService: LibroService,
    public autorService: AutorService,
    public categoriaService: CategoriaService,
    private modal: NgbModal,

    private modalService: BsModalService
  ) { }



  /**
   * Método  que se ejecuta cuando el componente se inicializado.
   * En este método, se configura el formulario 'libroForm', 
   * se obtienen los autores, categorías y libros desde los servicios correspondientes.
   */
  ngOnInit(): void {

    // Configuración del formulario 'libroForm' utilizando FormBuilder para crear el formulario.
    this.libroForm = this.formBuilder.group({
      idLibro: [''],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      autor: this.formBuilder.group({
        idAutor: ['', Validators.required],
        nombre: [''],
        fechaNacimiento: [''],
        pais: ['']
      }),
      categoria: this.formBuilder.group({
        idCategoria: ['', Validators.required],
        nombre: [''],
        archivo: ['']
      }),
      precio: ['', [Validators.required, Validators.min(0), Validators.nullValidator]],
      estado: ['']
    });

    // Obtener la lista de autores desde el servicio AutorService y asignarla a la variable 'autores'.
    this.autorService.getAllAutores().subscribe(resp => {
      this.autores = resp;
    });

    // Obtener la lista de categorias desde el servicio CategoriaService y asignarla a la variable 'categorias'.
    this.categoriaService.getAllCategorias().subscribe(resp => {
      this.categorias = resp;
    });

    // Obtener la lista de libros desde el servicio LibroService y asignarla a la variable 'libros'.
    this.libroService.getAllLibros().subscribe(resp => {
      this.libros = resp;
    });
  }



  
  abrir(confirmar: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(confirmar);
    return this.resultSubject.asObservable();
  }

  /**
   * Método que se encarga de guardar un libro enviando una solicitud al servicio LibroService.
   * Utiliza el formulario 'libroForm' para obtener los datos del libro a guardar.
   * Una vez que el libro se guarda exitosamente, se restablece el formulario, 
   * se actualiza la lista de libros y se cierra el modal.
   */  
  guardar(confirmar: TemplateRef<any>) {
    this.mensaje = "¿Estás seguro de que deseas guardar los cambios?";
    this.cambio=1;
    this.abrir(confirmar).subscribe((resultado) => {
      if (resultado) {
        this.confirm(); // Llamamos a confirm() solo si el usuario acepta desde el modal.
      } else {
        console.log("Guardado canceladsssso.");
        this.bsModalRef.hide(); // Ocultamos el modal si el usuario cancela.
      }
    });
  }
  
  confirm(): void {
    if(this.cambio==1){
    // Guarda el libro utilizando el servicio LibroService y los datos del formulario 'libroForm'.
    this.libroService.saveLibro(this.libroForm.value).subscribe(res => {
      // Restablecer el formulario después de guardar el libro exitosamente.
      this.libroForm.reset();
      // Obtener la lista actualizada de libros desde el servicio LibroService y asignarla a la variable 'libros'.
      this.libroService.getAllLibros().subscribe(updatedLibros => {
        this.libros = updatedLibros;
        // Cerrar el modal utilizando el método 'dismissAll()' proporcionado por NgbModal.
        this.bsModalRef.hide();
        this.modal.dismissAll();
      });
    });
   }else if(this.cambio==2){
  
    // Llama al servicio 'libroService' para desactivar el libro en el servidor.
    this.libroService.desactivar(this.libroForm.value).subscribe(res => {
      // Actualiza la lista de libros local para reflejar los cambios de desactivación.
      this.libros = this.libros.filter(libro1 => res.idLibro != libro1.idLibro);

      // Si la desactivación es exitosa, elimina el libro de la lista local 'libros'.
    this.bsModalRef.hide();      
    });
   }else{
    this.bsModalRef.hide();
    
   }
  }
  
  cancel(): void {
    this.resultSubject.next(false);
    this.bsModalRef.hide();
  }

  /**
 * Método que se encarga de editar un libro.
 * Asigna los valores del libro proporcionado al formulario 'libroForm' para que puedan ser editados.
 * Luego, abre el modal con el contenido especificado para permitir la edición de los datos del libro.
 * @param contenido - Un marcador de posición (ng-template) que representa el contenido del modal de edición.
 * @param libro El objeto que representa el libro a editar y que contiene los datos a mostrar en el formulario.
 */
  editar(contenido, libro) {

    // Asignar los valores del libro proporcionado al formulario 'libroForm' para que puedan ser editados.
    this.libroForm.setValue({
      idLibro: libro.idLibro,
      nombre: libro.nombre,
      autor: { idAutor: libro.autor.idAutor, nombre: libro.autor.nombre, fechaNacimiento: libro.autor.fechaNacimiento, pais: libro.autor.pais },
      categoria: { idCategoria: libro.categoria.idCategoria, nombre: libro.categoria.nombre, archivo: libro.categoria.archivo },
      precio: libro.precio,
      estado: libro.estado,
    });
    // Abrir el modal de edición utilizando la función 'openForm' y pasando el marcador de posición 'contenido'.
    this.openForm(contenido);
  }


  /**
 * Método que se encarga de cambiar el estado activo de un libro a desactivo.
 * Primeramente asigna los valores del libro proporcionado al formulario 'libroForm' a excepcion de "estado"donde se encuentra almacenado la palabra "desactivado".
 * Luego, llama al servicio 'libroService' para desactivar el libro en el servidor.
 * Si la desactivación es exitosa, se actualiza la lista de libros local para reflejar los cambios.
 * @param libro - El objeto que representa el libro a desactivar y contiene los datos a mostrar en el formulario.
 */
  desactivar(confirmar, libro) {
    let resp;
    this.cambio=2;
    this.mensaje = "¿Estás seguro de que deseas desactivar el libro?";
    this.libroForm.setValue({
      idLibro: libro.idLibro,
      nombre: libro.nombre,
      autor: libro.autor,
      categoria: libro.categoria,
      precio: libro.precio,
      estado: 'desactivado',
    });
    this.abrir(confirmar).subscribe((resultado) => {
      if (resultado) {
        // Asigna los valores del libro proporcionado al formulario 'libroForm' a excepcion del campo "estado" donde se encuentra almacenado la palabra "desactivado".
        if (resultado) {
          this.confirm(); // Llamamos a confirm() solo si el usuario acepta desde el modal.
        } else {
          console.log("Guardado canceladsssso.");
          this.bsModalRef.hide(); // Ocultamos el modal si el usuario cancela.
        }

      } 

    });
  }

  /**
 * Método que se encarga de abrir un modal con el contenido especificado.
 * @param contenido - Un marcador de posición (ng-template) que representa el contenido del modal de edición.
 */
  openForm(contenido): void {
    // Abre el modal utilizando la biblioteca NgbModal y muestra el contenido especificado.

    const modalRef = this.modal.open(contenido, { size: 'string', centered: true, animation: true, backdrop: 'static' });
    modalRef.result.then(
      // Manejar cierre con resultado (por ejemplo, al confirmar)
      (result) => {
        // Aquí puedes manejar cualquier lógica adicional después de cerrar el modal
      },
      // Manejar cierre sin resultado (por ejemplo, al hacer clic fuera del modal)
      (reason) => {
        this.resetearFormulario();
      }
    );
  }

  /**
 * Método que se encarga de restablecer el formulario 'libroForm'.
 * Limpia todos los campos del formulario y los restablece a sus valores iniciales o vacíos.
 */
  resetearFormulario(): void {
    // Restablece el formulario 'libroForm' a su estado inicial o vacío.
    this.libroForm.reset();
  }





  /* -----------------  VALIDACIONES PARA EL CAMPO NOMBRE Y EL CAMPO PRECIO ---------------------------  */

  /**
 * Método que valida el campo específico del formulario 'libroForm' llamado nombre.
 * @param field - Es el nombre del campo, en este caso llamado nombre, este es que se validara en el formulario 'libroForm'.
 * @returns El return contiene 2 objetos:
 *    - 'invalidClass': Es una clase CSS que indica si el campo es válido o inválido (por ejemplo, si valido: 'is-valid' o si es invalido:'is-invalid').
 *    - 'errorMessage': Este es el mensaje de error que se mostrará si el campo no cumple con las condiciones de validación.
 * Si no hay errores, las propiedades 'invalidClass' y 'errorMessage' contendrán valores vacíos.
 * Si el campo no cumple con las condiciones de validación, 'invalidClass' contendrá la clase CSS 'is-invalid' y 'errorMessage' mostrará el mensaje de error correspondiente.
 */
  isValidFieldNombre(field: string): { invalidClass: string, errorMessage: string } {

    // Obtiene una referencia al campo específico del formulario 'libroForm'.
    const validatedField = this.libroForm.get(field);

    // Verifica si el campo es 'nombre' y realiza la validación correspondiente.
    if (field === 'nombre') {
      // Obtiene el valor actual del campo 'nombre' del formulario.
      const fieldValue = validatedField?.value;

      // Verifica si el campo ha sido tocado o modificado, y si el valor tiene menos de 3 caracteres.
      if ((validatedField?.touched || validatedField?.dirty) && fieldValue !== null && fieldValue !== undefined && fieldValue.length < 3) {
        // Si el campo no cumple con las condiciones de validación.

        // Devuelve la clase CSS 'is-invalid' para resaltar el campo con estilo de error.
        // Devuelve un mensaje de error que se mostrará para indicar la condición de validación no cumplida.
        return {
          invalidClass: (!validatedField?.valid && (validatedField?.touched || validatedField?.dirty)) ? 'is-invalid' : (validatedField?.touched || validatedField?.dirty) ? 'is-valid' : ''
          , errorMessage: 'El nombre debe tener al menos 3 caracteres.'
        };
      }
    }

    // Si el campo cumple con las condiciones de validación.

    // Devuelve la clase CSS 'is-valid' si el campo ha sido tocado y es válido, de lo contrario, devuelve un valor vacío.
    // Devuelve un mensaje de error vacío, ya que el campo cumple con las condiciones de validación.
    return { invalidClass: validatedField?.valid && validatedField?.touched ? 'is-valid' : '', errorMessage: '' };
  }




 /**
 * Método que valida el campo específico del formulario 'libroForm' llamado precio.
 * @param field - Es el nombre del campo, en este caso llamado precio, este campo el que se va a validar en el formulario 'libroForm'.
 * @returns El return contiene 2 objetos:
 *    - 'invalidClass': Es una clase CSS que indica si el campo es válido o inválido (por ejemplo, si valido: 'is-valid' o si es invalido:'is-invalid').
 *    - 'errorMessage': Este es el mensaje de error que se mostrará si el campo no cumple con las condiciones de validación.
 * Si no hay errores, las propiedades 'invalidClass' y 'errorMessage' contendrán valores vacíos.
 * Si el campo no cumple con las condiciones de validación, 'invalidClass' contendrá la clase CSS 'is-invalid' y 'errorMessage' mostrará el mensaje de error correspondiente.
 */ isValidFieldPrecio(field: string): { invalidClass: string, errorMessage: string } {
    //Obtiene una referencia al campo especificado del formulario 'libroForm'.  
    const validatedField = this.libroForm.get(field);

    //Verifica si el campo es 'precio' y realiza la validacion correspondiente
    if (field === 'precio') {
      //Obtiene el valor actual del campo 'precio' del formulario
      const fieldValue = validatedField?.value;

      // Verifica si el campo no está en blanco y es un valor numérico válido.
      if (fieldValue !== null && fieldValue !== undefined) {
        // Intenta convertir el valor del campo a un número usando Number().

        const fieldValueAsNumber = Number(fieldValue);
        // Verifica si el valor no es un número válido (por ejemplo, texto o valor no numérico).
        if (isNaN(fieldValueAsNumber)) {
          /* Si el campo no es un valor numérico válido, retornara lo siguiente:.
          * Devuelve la clase CSS 'is-invalid'.
          * Devuelve un mensaje de error donde indica al usuario que 'El precio debe ser un valor numérico válido.'.
       */
          return {
            invalidClass: 'is-invalid',
            errorMessage: 'El precio debe ser un valor numérico válido.'
          };
        } else if (fieldValueAsNumber < 0) {
          /* Si el campo 'precio' es menor a cero estaria indicando que es un numero negativo, lo cual
           * no es valido para el precio, por lo cual retornara lo siguiente:.
          * Devuelve la clase CSS 'is-invalid'.
          * Devuelve un mensaje de error donde indica al usuario que 'El precio no puede ser menor a 0.'.
          */
          return {
            invalidClass: 'is-invalid',
            errorMessage: 'El precio no puede ser menor a 0.'
          };
        }
      } else {
        /* Si ninguna de las condiciones anteriores fueron ciertas, quiere decir que el campo 'precio' está en blanco, 
         * lo cual no es valido para el precio, por lo cual retornara lo siguiente:
         * Devuelve la clase CSS 'is-invalid'.
         * Devuelve un mensaje de error donde indica al usuario que 'El precio es obligario'.
         */
        return {
          invalidClass: 'is-invalid',
          errorMessage: 'El precio es obligatorio.'
        };
      }
    }

    /* Si ninguna de las condiciones anteriores presentadas fueron ciertas, quiere decir que el campo cumple con las condiciones de validación, 
     * por lo cual:
     * Devuelve la clase CSS 'is-valid' si el campo ha sido tocado y es válido, de lo contrario, devuelve un valor vacío.
     * Devuelve un mensaje de error vacío, ya que el campo cumple con las condiciones de validación.
     */
    return {
      invalidClass: (validatedField?.valid && (validatedField?.touched || validatedField?.dirty)) ? 'is-valid' : '',
      errorMessage: ''
    };
  }


}
