package com.bookinventory.core;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@SpringBootApplication
public class BookInventoryBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookInventoryBackendApplication.class, args);
	}
	
	/**
	 * CORS es decir Cross-Origin Resource Sharing o en español como
	 * Compartir recursos de origen cruzado, este metodo que se configura en la aplicación Spring Boot.
	 * crea un objeto de tipo WebMvcConfigurer que define la configuración CORS para la aplicación.
	 * lo cual nos permite que el servidor acepte solicitudes desde el origen en este caso "http://localhost:4200".
	 * al igual que permite todos los métodos HTTP y todos los encabezados en las solicitudes CORS.
	 * 
	 */
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:4200").allowedMethods("*").allowedHeaders("*");
			}
		};
	}
}
