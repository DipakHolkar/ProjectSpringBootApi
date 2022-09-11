package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entities.Institute;

import com.example.demo.repository.InstituteRepository;


public class InstituteService {

	
	@Autowired
	InstituteRepository instituterepo;
	
	
	public Institute add(Institute i) {
		
		return instituterepo.save(i);
	}
}
