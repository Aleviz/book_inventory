package com.bookinventory.core.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

/**
 * Clase de modelo para la entidad Libro.
 * Esta clase representa un libro en la base de datos y se mapea a la tabla 'libro'.
 */
@Entity
@Table(name="libro")
public class Libro {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idLibro; // Atributo privado que almacena el ID del libro.
	private String nombre;// Atributo privado que almacena el nombre del libro.
	
	@ManyToOne
	@JoinColumn(name="autor")
	private Autor autor;// Atributo privado que almacena el autor del libro mediante una relación ManyToOne.
	@ManyToOne
	@JoinColumn(name="categoria")
	private Categoria categoria;// Atributo privado que almacena la categoría del libro mediante una relación ManyToOne.

	private double precio; // Atributo privado que almacena el precio del libro.
	private String estado; // Atributo privado que almacena el estado del libro (activo o desactivado).

	
	
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

	// Getters y Setters para todos los atributos.

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
