package com.bookinventory.core.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


/**
 * Clase de modelo para la entidad Autor.
 * Esta clase representa un autor en la base de datos y se mapea a la tabla 'autor'.
 */
@Entity
@Table(name="autor")
public class Autor {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAutor;// Atributo privado que almacena el ID del autor.
	private String nombre;// Atributo privado que almacena el nombre del autor.
	private Date fechaNacimiento;// Atributo privado que almacena la fecha de nacimiento del autor.
	private String pais;// Atributo privado que almacena el pais del autor.
	
	
	public Autor() {}


	public Autor(Long idAutor, String nombre, Date fechaNacimiento, String pais) {
		this.idAutor = idAutor;
		this.nombre = nombre;
		this.fechaNacimiento = fechaNacimiento;
		this.pais = pais;
	}

	// Getters y Setters para todos los atributos.
	public Long getIdAutor() {
		return idAutor;
	}


	public void setIdAutor(Long idAutor) {
		this.idAutor = idAutor;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public Date getFechaNacimiento() {
		return fechaNacimiento;
	}


	public void setFechaNacimiento(Date fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}


	public String getPais() {
		return pais;
	}


	public void setPais(String pais) {
		this.pais = pais;
	}
	
	
	
	
}
