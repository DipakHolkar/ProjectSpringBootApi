package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="course_id")
	private int courseId;
	
	@Column(name="course_name")
	private String  courseName;
	
	@Column(name="course_duration")
	private int courseDuration;
	
	@Column(name="course_details")
	private String courseDetails;

	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Course(int courseId, String courseName, int courseDuration, String courseDetails) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.courseDuration = courseDuration;
		this.courseDetails = courseDetails;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public int getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}

	public String getCourseDetails() {
		return courseDetails;
	}

	public void setCourseDetails(String courseDetails) {
		this.courseDetails = courseDetails;
	}
	
	
}
