package com.bookinventory.core.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookinventory.core.model.Libro;
import com.bookinventory.core.repository.LibroRepository;

@Service
public class LibroService {

	/**
	 * Inyeccion de Dependecia del repositorio LibroRepository mediante la
	 * anotacion de '@Autowired'
	 * */
	@Autowired
	private LibroRepository libroRepository;

	/**
	 * Método para guardar los datos de un libro en la base de datos.
	 * Si el libro es nuevo (no tiene ID), establece el estado como "activo" antes de guardarlo.
	 * Si el libro ya existe (tiene ID), se actualiza su información.
	 * @param entity Objeto Libro que se va a guardar o actualizar.
	 * @return El objeto Libro guardado o actualizado.
	 */
	public <S extends Libro> S save(S entity) {
		if (entity.getIdLibro() == null) {
			entity.setEstado("activo");
		}
		return libroRepository.save(entity);
	}
	/**
	 * Método para obtener todos los libros activos ordenados de forma ascendente.
	 * @param estado El estado de los libros a filtrar, en este caso "activo".
	 * @return Una lista de libros activos ordenados por su ID en orden ascendente.
	 */
	public List<Libro> getAllLibroActive(String estado) {
		return libroRepository.findByEstadoOrderByIdLibroAsc(estado);
	}
}
