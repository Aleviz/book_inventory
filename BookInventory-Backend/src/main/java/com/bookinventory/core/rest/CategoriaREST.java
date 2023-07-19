package com.bookinventory.core.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookinventory.core.model.Categoria;
import com.bookinventory.core.service.CategoriaService;

@RestController
@RequestMapping("/categoria/")
public class CategoriaREST {
	//Inyeccion del servicio AutoService
		@Autowired
		private CategoriaService categoriaService;
		
		
		
		/*
		 * Este metodo nos muestra todos los autores
		 * @return una lista de tipo Autor, en formato json, el cual contiene todaos los datos
		 * de la tabla autor
		 * */
		@GetMapping
		public ResponseEntity<List<Categoria>> getAllCategorias(){
			return ResponseEntity.ok(categoriaService.getAllCategorias());
		}
		


}
