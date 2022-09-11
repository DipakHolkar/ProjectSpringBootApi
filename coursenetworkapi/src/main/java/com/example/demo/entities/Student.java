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
@Table(name="student")
public class Student {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	/*
	  @OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	
	private User student_id;*/
	@Column(name="student_id")
	private int studentId;
	
	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
	
	@Column(name="qualification")
	private String qualification;
	
	@Column(name="emailid")
	private String emailid;
	
	@Column(name="contactno")
	private String contactno;

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	


	public Student(int id, int studentId, String firstname, String lastname, String qualification, String emailid,
			String contactno) {
		super();
		this.id = id;
		this.studentId = studentId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.qualification = qualification;
		this.emailid = emailid;
		this.contactno = contactno;
	}





	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	/*
	public User getStudent_id() {
		return student_id;
	}


	public void setStudent_id(User student_id) {
		this.student_id = student_id;
	}
*/

	
	public String getFirstname() {
		return firstname;
	}

	public int getStudentId() {
		return studentId;
	}





	public void setStudentId(int studentId) {
		this.studentId = studentId;
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
