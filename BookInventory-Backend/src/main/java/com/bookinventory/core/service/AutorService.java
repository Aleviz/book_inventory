package com.bookinventory.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookinventory.core.model.Autor;
import com.bookinventory.core.repository.AutorRepository;

@Service
public class AutorService {
	
	@Autowired
	private AutorRepository autorRepository;
	
	public List<Autor> getAllAutores(){
		return autorRepository.findAll();
	}
}
