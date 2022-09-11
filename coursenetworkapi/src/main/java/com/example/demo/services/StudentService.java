package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entities.Student;

import com.example.demo.repository.StudentRepository;


public class StudentService {

	
	@Autowired
	StudentRepository studentrepo;
	
	
	public Student add(Student s) {
		
		return studentrepo.save(s);
	}
}
