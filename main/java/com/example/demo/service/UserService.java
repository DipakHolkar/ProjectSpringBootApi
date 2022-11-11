package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository urepo;
	 	
	 public Optional<User> login (String username,String password)
		{
		 
		return  urepo.findByUsernameAndPassword(username,password);
		 
		
		
		 
		}

	
	public User add(User u)
	{
		return urepo.save(u);
	}
}
