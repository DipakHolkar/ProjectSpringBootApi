package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="institute")
public class Institute {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ins_Id")
	private int insId;
	
	@Column(name="institute_name")
	private String instituteName;
	
	@Column(name="address")
	private String address;
	
	@Column(name="emailid")
	private String emailId;
	
	@Column(name="contact_num")
	private String contactNum;
	
	@Column(name="authorization_status")
	private String authorizationStatus;
	
//	@OneToOne(cascade=CascadeType.ALL,orphanRemoval=true) 
//	@JoinColumn(name="institute_id",referencedColumnName = "user_id") 
//	User user;
	@OneToOne(cascade=CascadeType.ALL) 
	@JoinColumn(name="institute_id",referencedColumnName = "user_id") 
	User user;
	public Institute() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Institute(String instituteName, String address, String emailId, String contactNum,String authorization_status, User user) {
		super();
		
		this.instituteName = instituteName;
		this.address = address;
		this.emailId = emailId;
		this.contactNum = contactNum;
		this.user = user;
		this.authorizationStatus=authorization_status;
	}
	
	
	public int getInsId() {
		return insId;
	}
	public void setInsId(int insId) {
		this.insId = insId;
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
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getContactNum() {
		return contactNum;
	}
	public void setContactNum(String contactNum) {
		this.contactNum = contactNum;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getAuthorizationStatus() {
		return authorizationStatus;
	}
	public void setAuthorizationStatus(String authorizationStatus) {
		this.authorizationStatus = authorizationStatus;
	}
	 
	
	

}
