package com.bookinventory.core.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * Clase de modelo para la entidad Categoria.
 * Esta clase representa un autor en la base de datos y se mapea a la tabla 'categoria'.
 */
@Entity
@Table(name="categoria")
public class Categoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idCategoria;// Atributo privado que almacena el ID de la categoria.
	private String nombre;// Atributo privado que almacena el nombre de la categoria.
	private String archivo;// Atributo privado que almacena el codigo-archivo de la categoria.
	
	
	public Categoria() {}
	public Categoria(String nombre, String archivo) {
		this.nombre=nombre;
		this.archivo=archivo;
	}
	
	// Getters y Setters para todos los atributos.
	public Long getIdCategoria() {
		return idCategoria;
	}
	public void setIdCategoria(Long idCategoria) {
		this.idCategoria = idCategoria;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getArchivo() {
		return archivo;
	}
	public void setArchivo(String archivo) {
		this.archivo = archivo;
	}
	
	
	
	
	
	
}
