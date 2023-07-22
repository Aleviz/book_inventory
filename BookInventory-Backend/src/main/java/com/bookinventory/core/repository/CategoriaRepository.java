package com.bookinventory.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookinventory.core.model.Categoria;

/**
 * Repositorio de la entidad Categoria.
 * 
 * Este repositorio extiende JpaRepository para realizar operaciones CRUD en la tabla de categoria en la base de datos.
 */
@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long>{

}
