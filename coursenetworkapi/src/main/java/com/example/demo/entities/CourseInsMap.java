package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course_ins_map")
public class CourseInsMap {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cmap_id")
	private int cmapId;
	
	@Column(name="course_id")
	private int courseId;
	
	@Column(name="institute_id")
	private int instituteId;
	
	@Column(name="course_fees")
	private double courseFees;
	
	@Column(name="course_info")
	private String courseInfo;

	public CourseInsMap() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CourseInsMap(int cmapId, int courseId, int instituteId, double courseFees, String courseInfo) {
		super();
		this.cmapId = cmapId;
		this.courseId = courseId;
		this.instituteId = instituteId;
		this.courseFees = courseFees;
		this.courseInfo = courseInfo;
	}

	public int getCmapId() {
		return cmapId;
	}

	public void setCmapId(int cmapId) {
		this.cmapId = cmapId;
	}

	public int getCourseId() {
		return courseId;
	}

	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}

	public int getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(int instituteId) {
		this.instituteId = instituteId;
	}

	public double getCourseFees() {
		return courseFees;
	}

	public void setCourseFees(double courseFees) {
		this.courseFees = courseFees;
	}

	public String getCourseInfo() {
		return courseInfo;
	}

	public void setCourseInfo(String courseInfo) {
		this.courseInfo = courseInfo;
	}
	
	
	
	
}
