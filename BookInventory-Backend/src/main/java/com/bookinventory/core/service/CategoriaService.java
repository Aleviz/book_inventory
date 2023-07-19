package com.bookinventory.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookinventory.core.model.Categoria;
import com.bookinventory.core.repository.CategoriaRepository;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	public List<Categoria> getAllCategorias(){
		return categoriaRepository.findAll();
	}
}
