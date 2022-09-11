package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {

	/*@Column(name="user_id")*/
	/*
	@GeneratedValue(strategy = GenerationType.IDENTITY)	*/
	@Id	
	private int user_id;
	
	@Column(name="username")
	private String username;
	
	@Column(name="password")
	private String password;
	
	@Column(name="user_role")
	private String userRole;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int user_id, String username, String password, String userRole) {
		super();
		this.user_id = user_id;
		this.username = username;
		this.password = password;
		this.userRole = userRole;
	}

	

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserRole() {
		return userRole;
	}

	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	
	
	
}
