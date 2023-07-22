package com.bookinventory.core.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookinventory.core.model.Libro;

/**
 * Repositorio de la entidad Libro.
 * 
 * Este repositorio extiende JpaRepository para realizar operaciones CRUD en la tabla de libros en la base de datos.
 */
@Repository
public interface LibroRepository extends JpaRepository<Libro, Long>{


	/**
	 * Método que devuelve una lista de libros filtrados por su estado, ordenados por el ID del libro de forma ascendente.
	 * 
	 * @param estado El estado de los libros a filtrar.
	 * @return Una lista de libros que coinciden con el estado dado, ordenados por el ID del libro de forma ascendente.
	 */
	List<Libro> findByEstadoOrderByIdLibroAsc(String estado);
}
