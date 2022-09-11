package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	
	public void saveOrUpdate(User u)   
	{  
		userRepository.save(u);  
	}  
	
	
	public List<User> getAllUser()   
	{  
	List<User> user = new ArrayList<User>();  
	userRepository.findAll().forEach(user1 -> user.add(user1));  
	return user;  
	}  
	
	public List<User> getAll()
	{
		return userRepository.findAll();
	}
	public User saveUser(User u)
	{
		return userRepository.save(u);
	}
	
}
