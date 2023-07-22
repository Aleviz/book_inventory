package com.bookinventory.core.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookinventory.core.model.Libro;
import com.bookinventory.core.service.LibroService;


/*
 * Controlador REST para la entidad Libro.
 * Este controlador proporciona endpoints para realizar operaciones CRUD en la entidad Libro.
 */
@RestController
@RequestMapping("/libro/")
public class LibroREST {


	// Inyección del servicio LibroService mediante la anotación @Autowired
	@Autowired
	private LibroService libroService;
	
	
	
	/*
	 * Este metodo nos muestra todos los libros que esten activos
	 * @return una lista de tipo Libro, en formato json, el cual contiene todaos los datos
	 * de la tabla libro
	 * */
	@GetMapping
	public ResponseEntity<List<Libro>> getAllLibros(){
		return ResponseEntity.ok(libroService.getAllLibroActive("activo"));
	}
	
	
	/**
	 * Método POST para guardar un nuevo libro en la base de datos.
	 * 
	 * @param libro El objeto Libro que se desea guardar en la base de datos.
	 * @return ResponseEntity con el libro guardado en caso de éxito (código 201 Created)
	 *         y un ResponseEntity con código 400 Bad Request en caso de error.
	 */
	@PostMapping
	public ResponseEntity<Libro> saveLibro(@RequestBody Libro libro){
		try {
			Libro libSave = libroService.save(libro);
			return ResponseEntity.created(new URI("/libro/"+libSave.getIdLibro())).body(libSave);
		}catch(Exception e) {
						return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}
	
	
}
