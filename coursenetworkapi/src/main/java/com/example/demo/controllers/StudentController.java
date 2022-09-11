package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Student;
import com.example.demo.entities.User;
import com.example.demo.services.StudentService;
import com.example.demo.services.UserService;

/*@CrossOrigin(origins="http://localhost:3000")*/
@RestController
public class StudentController {
/*
	@Autowired
	StudentService sservice;
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/registers")
	public Student resisterstudent(User s)
	{
		User u=new User(s.getUsername(),s.getPassword())
	}
	*/
}
