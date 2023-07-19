package com.bookinventory.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookinventory.core.model.Libro;

@Repository
public interface LibroRepository extends JpaRepository<Libro, Long>{

}
