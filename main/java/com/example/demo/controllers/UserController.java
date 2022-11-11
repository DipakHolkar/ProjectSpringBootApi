package com.example.demo.controllers;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.LoginRequest;
import com.example.demo.entities.User;
import com.example.demo.service.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService uService;
	
	
	@PostMapping("/log")
	public ResponseEntity<User> login(@RequestBody LoginRequest r) {
		
		
		Optional<User> user=uService.login(r.getUsername(),r.getPassword());
		
		if( user.isPresent())
		{
			user.get().setPassword(null);
			return new ResponseEntity(user.get(),HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity(HttpStatus.UNAUTHORIZED);
		}
	}
	
	
	
	
	
}
