package com.bookinventory.core.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="libro")
public class Libro {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idLibro;
	private String nombre;
	
	@ManyToOne
	@JoinColumn(name="id_autor")
	private Autor autor;
	@ManyToOne
	@JoinColumn(name="id_categoria")
	private Categoria categoria;
	private double precio;
	private String estado;
	
	
	public Libro() {}


	public Libro(Long idLibro, String nombre, Autor autor, Categoria categoria, double precio, String estado) {
		super();
		this.idLibro = idLibro;
		this.nombre = nombre;
		this.autor = autor;
		this.categoria = categoria;
		this.precio = precio;
		this.estado = estado;
	}


	public Long getIdLibro() {
		return idLibro;
	}


	public void setIdLibro(Long idLibro) {
		this.idLibro = idLibro;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public Autor getAutor() {
		return autor;
	}


	public void setAutor(Autor autor) {
		this.autor = autor;
	}


	public Categoria getCategoria() {
		return categoria;
	}


	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}


	public double getPrecio() {
		return precio;
	}


	public void setPrecio(double precio) {
		this.precio = precio;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	
}
