package com.bookinventory.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bookinventory.core.model.Autor;

@Repository
public interface AutorRepository extends JpaRepository<Autor, Long>{

}
