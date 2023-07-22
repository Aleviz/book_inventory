package com.bookinventory.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookinventory.core.model.Autor;
import com.bookinventory.core.repository.AutorRepository;

@Service
public class AutorService {
	
	/**
	 * Inyeccion de Dependecia del repositorio AutorRepository mediante la
	 * anotacion de '@Autowired'
	 * */
	@Autowired
	private AutorRepository autorRepository;
	
	/*
	 * Método que nos permite obtener todos los autores
	 * @return retorna una lista de todos los autores
	 * **/
	public List<Autor> getAllAutores(){
		return autorRepository.findAll();
	}
}
