 package com.example.demo.entities;

public class InstituteRegistration {
	String username;
	String password;
	String instituteName;
	String address;
	String emailId;
	String contactNum;
	public String getEmailId() {
		return emailId;
	}
	 
	public InstituteRegistration(String username, String password, String instituteName, String address,
			String emailid, String contactNum,String authorizationStatus) {
		super();
		this.username = username;
		this.password = password;
		this.instituteName = instituteName;
		this.address = address;
		this.emailId = emailid;
		this.contactNum = contactNum;
		this.authorizationStatus=authorizationStatus;
		
	}
	public InstituteRegistration(String instituteName, String address,
			String emailid, String contactNum,String authorizationStatus) {
		super();
		this.instituteName = instituteName;
		this.address = address;
		this.emailId = emailid;
		this.contactNum = contactNum;
		this.authorizationStatus=authorizationStatus;
		
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
	public String getInstituteName() {
		return instituteName;
	}
	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	 
	public String getContactNum() {
		return contactNum;
	}
	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}
	public String getAuthorizationStatus() {
		return authorizationStatus;
	}
	public void setAuthorizationStatus(String authorizationStatus) {
		this.authorizationStatus = authorizationStatus;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	String authorizationStatus;
	public InstituteRegistration() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
