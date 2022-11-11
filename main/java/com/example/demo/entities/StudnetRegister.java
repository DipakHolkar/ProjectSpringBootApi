package com.example.demo.entities;

public class StudnetRegister {
	
	String username;
	String password;
	String firstname;
	String lastname;
	String qualification;
	String emailid;
	String contactno;
	
	
	public StudnetRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public StudnetRegister(String username, String password, String firstname, String lastname, String qualification,
			String emailid, String contactno) {
		super();
		this.username = username;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.qualification = qualification;
		this.emailid = emailid;
		this.contactno = contactno;
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
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	
	

}
