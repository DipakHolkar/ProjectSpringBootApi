package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="feedback")
public class Feedback {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="feedback_id")
	private int feedbackId;
	
	@Column(name="student_id")
	private int studentId;
	
	@Column(name="institute_id")
	private int instituteId;
	
	@Column(name="course_id")
	private int courseId;
	
	@Column(name="feedback")
	private String feedback;
	
	@Column(name="feedback_date")
	private String feedbackDate;

	public Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Feedback(int feedbackId, int studentId, int instituteId, int courseId, String feedback,
			String feedbackDate) {
		super();
		this.feedbackId = feedbackId;
		this.studentId = studentId;
		this.instituteId = instituteId;
		this.courseId = courseId;
		this.feedback = feedback;
		this.feedbackDate = feedbackDate;
	}

	public int getFeedbackId() {
		return feedbackId;
	}

	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public int getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(int instituteId) {
		this.instituteId = instituteId;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public String getFeedbackDate() {
		return feedbackDate;
	}

	public void setFeedbackDate(String feedbackDate) {
		this.feedbackDate = feedbackDate;
	}
	
	
	
}
