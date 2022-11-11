package com.example.demo.bean;

import java.sql.Date;

import javax.persistence.Column;

public class FeedbackPost {
	
	private int student_id;
	private int institute_id;
	private int course_id;
	private String feedback;
	private Date feedback_date;
	
	public FeedbackPost() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FeedbackPost(int student_id, int institute_id, int course_id, String feedback, Date feedback_date) {
		super();
		this.student_id = student_id;
		this.institute_id = institute_id;
		this.course_id = course_id;
		this.feedback = feedback;
		this.feedback_date = feedback_date;
	}

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public int getInstitute_id() {
		return institute_id;
	}

	public void setInstitute_id(int institute_id) {
		this.institute_id = institute_id;
	}

	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}

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
	
	
	
	
	


}
