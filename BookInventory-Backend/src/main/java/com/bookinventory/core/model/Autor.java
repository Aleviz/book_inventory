package com.bookinventory.core.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="autor")
public class Autor {


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idAutor;
	private String nombre;
	private Date fechaNacimiento;
	private String pais;
	
	
	public Autor() {}


	public Autor(Long idAutor, String nombre, Date fechaNacimiento, String pais) {
		this.idAutor = idAutor;
		this.nombre = nombre;
		this.fechaNacimiento = fechaNacimiento;
		this.pais = pais;
	}


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
