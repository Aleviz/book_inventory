package com.bookinventory.core.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookinventory.core.model.Libro;
import com.bookinventory.core.service.LibroService;

@RestController
@RequestMapping("/libro/")
public class LibroREST {


	//Inyeccion del servicio LibroService
	@Autowired
	private LibroService libroService;
	
	
	
	/*
	 * Este metodo nos muestra todos los libros
	 * @return una lista de tipo Libro, en formato json, el cual contiene todaos los datos
	 * de la tabla libro
	 * */
	@GetMapping
	public ResponseEntity<List<Libro>> getAllLibros(){
		return ResponseEntity.ok(libroService.getAllLibros());
	}
	
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
