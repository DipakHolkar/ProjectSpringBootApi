package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="institute")
public class Institute {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ins_id")
	private int insId;
	
	@Column(name="institute_id")
	private int instituteId;
	
	@Column(name="institute_name")
	private String instituteName;
		
	@Column(name="address")
	private String address;
	
	@Column(name="emailid")
	private String emailId;
	
	@Column(name="contact_num")
	private String contactNum;
	
	@Column(name="isAuthorize")
	private String isAuthorize;

	public Institute() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Institute(int insId, int instituteId, String instituteName, String address, String emailId,
			String contactNum, String isAuthorize) {
		super();
		this.insId = insId;
		this.instituteId = instituteId;
		this.instituteName = instituteName;
		this.address = address;
		this.emailId = emailId;
		this.contactNum = contactNum;
		this.isAuthorize = isAuthorize;
	}

	public int getInsId() {
		return insId;
	}

	public void setInsId(int insId) {
		this.insId = insId;
	}

	public int getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(int instituteId) {
		this.instituteId = instituteId;
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

	public String getIsAuthorize() {
		return isAuthorize;
	}

	public void setIsAuthorize(String isAuthorize) {
		this.isAuthorize = isAuthorize;
	}
	
	
}
