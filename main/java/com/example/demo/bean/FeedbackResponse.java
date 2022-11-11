package com.example.demo.bean;

public class FeedbackResponse {
	
	private String studentName;
	private String courseName;
	
	private String feedback;

		
	public FeedbackResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FeedbackResponse(String studentName, String courseName, String feedback) {
		super();
		this.studentName = studentName;
		this.courseName = courseName;
		this.feedback = feedback;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	
	
	

}
