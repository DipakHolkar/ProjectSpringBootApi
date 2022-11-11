package com.example.demo.entities;

import java.io.Serializable;

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
@Table(name="student")

public class Student implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	
	
	@Column
	String firstname;
	
	@Column
	String lastname;
	
	@Column
	String qualification;
	
	@Column
	String emailid;
	
	@Column
	String contactno;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="student_id",referencedColumnName = "user_id")
	User user;

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Student(String firstname, String lastname, String qualification, String emailid, String contactno,
			User u) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.qualification = qualification;
		this.emailid = emailid;
		this.contactno = contactno;
		this.user=u;
		//this.student_id= student_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	
	
}
