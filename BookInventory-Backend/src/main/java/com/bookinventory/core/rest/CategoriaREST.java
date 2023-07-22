package com.bookinventory.core.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookinventory.core.model.Categoria;
import com.bookinventory.core.service.CategoriaService;

/*
 * Controlador REST para la entidad Categoria.
 * Este controlador proporciona endpoints para realizar operaciones CRUD en la entidad Categoria, 
 */
@RestController
@RequestMapping("/categoria/")
public class CategoriaREST {
	
	// Inyección del servicio CategoriaService mediante la anotación @Autowired
		@Autowired
		private CategoriaService categoriaService;
		
		
		
		/*
		 * Este metodo nos muestra todos las categorias
		 * @return una lista de tipo Categoria, en formato json, el cual contiene todaos los datos
		 * de la tabla categoria
		 * */
		@GetMapping
		public ResponseEntity<List<Categoria>> getAllCategorias(){
			return ResponseEntity.ok(categoriaService.getAllCategorias());
		}
		


}
