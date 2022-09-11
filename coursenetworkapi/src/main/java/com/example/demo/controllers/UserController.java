package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.User;
import com.example.demo.services.UserService;

@RestController
public class UserController {

	@Autowired
	UserService uService;
	
	@GetMapping("/user")  
	private List<User> getAllUser()   
	{  
	return uService.getAllUser();  
	}  
	
	@PostMapping("/user")  
	private int saveUser1(@RequestBody User user)   
	{  
	uService.saveOrUpdate(user);  
	return user.getUser_id();  
	}  
		
	
	@GetMapping("/alluser")
	public List<User> getAll()
	{
		
		return uService.getAll();
	}
	
	@PostMapping("/saveuser")	
	public User saveUser(@RequestBody User u)
	{
		return uService.saveUser(u);
	}
}
