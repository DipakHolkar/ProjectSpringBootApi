package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

@EnableEncryptableProperties
@SpringBootApplication
public class ProjetcRestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetcRestApiApplication.class, args);
	}

}
