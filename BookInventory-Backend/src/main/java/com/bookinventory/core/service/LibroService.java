package com.bookinventory.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookinventory.core.model.Libro;
import com.bookinventory.core.repository.LibroRepository;

@Service
public class LibroService {
	
	@Autowired
	private LibroRepository libroRepository;
	
	public List<Libro> getAllLibros(){
		return libroRepository.findAll();
	}
	
	public <S extends Libro> S save(S entity) {
		return libroRepository.save(entity);
	}

}