package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="user")
@JsonIgnoreProperties({"password"})
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int user_id;
	
	@Column
	String username;
	
	@Column
	String password;
	
	@Column
	String user_role;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String username, String password, String user_role) {
		super();
		this.username = username;
		this.password = password;
		this.user_role = user_role;
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

	public String getUser_role() {
		return user_role;
	}

	public void setUser_role(String user_role) {
		this.user_role = user_role;
	}
	
	

}
