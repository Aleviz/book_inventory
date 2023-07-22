package com.bookinventory.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookinventory.core.model.Categoria;
import com.bookinventory.core.repository.CategoriaRepository;

@Service
public class CategoriaService {

	/**
	 * Inyección de Dependecia del repositorio CategoriaRepository mediante la
	 * anotacion de '@Autowired'
	 * */
	@Autowired
	private CategoriaRepository categoriaRepository;
	

	/*
	 * Método que nos permite obtener todos los categorias
	 * @return retorna una lista de todos las categorias
	 * **/
	public List<Categoria> getAllCategorias(){
		return categoriaRepository.findAll();
	}
}
