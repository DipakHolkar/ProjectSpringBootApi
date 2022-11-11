package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int feedback_id;
	
//	@Column
//	private int student_id;
	
	@Column
	private int institute_id;
	
//	@Column
//	private int course_id;
	
	@Column
	private String feedback;
	
	@Column
	private Date feedback_date;
	
	@OneToOne
	@JoinColumn(name="student_id",referencedColumnName = "student_id")
	Student student;
	
	@OneToOne
	@JoinColumn(name="course_id",referencedColumnName = "course_id")
	Course course;
	
		

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Feedback(int feedback_id, int student_id, int institute_id, int course_id, String feedback,
			Date feedback_date,Student s,Course c) {
		super();
		this.feedback_id = feedback_id;
//		this.student_id = student_id;
		this.institute_id = institute_id;
//		this.course_id = course_id;
		this.feedback = feedback;
		this.feedback_date = feedback_date;
		this.student=s;
		this.course=c;
		
	}

	public int getFeedback_id() {
		return feedback_id;
	}

	public void setFeedback_id(int feedback_id) {
		this.feedback_id = feedback_id;
	}

//	public int getStudent_id() {
//		return student_id;
//	}
//
//	public void setStudent_id(int student_id) {
//		this.student_id = student_id;
//	}

	public int getInstitute_id() {
		return institute_id;
	}

	public void setInstitute_id(int institute_id) {
		this.institute_id = institute_id;
	}

//	public int getCourse_id() {
//		return course_id;
//	}
//
//	public void setCourse_id(int course_id) {
//		this.course_id = course_id;
//	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public Date getFeedback_date() {
		return feedback_date;
	}

	public void setFeedback_date(Date feedback_date) {
		this.feedback_date = feedback_date;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	
	

}
