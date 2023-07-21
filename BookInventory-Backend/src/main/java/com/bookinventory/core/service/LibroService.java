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
	
		
	public <S extends Libro> S save(S entity) {
		if(entity.getIdLibro()==null){
			entity.setEstado("activo");
			System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaa");
		}else {
			System.out.println("bbbbbbbbbbbbbbbbbbbbbbbb");
		}
		return libroRepository.save(entity);
	}

	public List<Libro> getAllLibroActive(String estado){
		return libroRepository.findByEstado(estado);
	}
}
