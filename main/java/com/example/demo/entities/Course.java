package com.example.demo.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course implements Serializable{
	
	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int course_id;
	
	@Column
	private int institute_id;
	
	@Column
	private String  course_name;
	
	@Column
	private int course_duration;
	
	@Column
	private String course_details;	
	
	@Column
	private double course_fees;
	
	@Column
	private String course_info;

	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Course(int course_id, int institute_id, String course_name, int course_duration, String course_details,
			double course_fees, String course_info) {
		super();
		this.course_id = course_id;
		this.institute_id = institute_id;
		this.course_name = course_name;
		this.course_duration = course_duration;
		this.course_details = course_details;
		this.course_fees = course_fees;
		this.course_info = course_info;
	}

	


	

	public int getInstitute_id() {
		return institute_id;
	}

	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}

	public void setInstitute_id(int institute_id) {
		this.institute_id = institute_id;
	}

	public String getCourse_name() {
		return course_name;
	}

	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}

	public int getCourse_duration() {
		return course_duration;
	}

	public void setCourse_duration(int course_duration) {
		this.course_duration = course_duration;
	}

	public String getCourse_details() {
		return course_details;
	}

	public void setCourse_details(String course_details) {
		this.course_details = course_details;
	}

	public double getCourse_fees() {
		return course_fees;
	}

	public void setCourse_fees(double course_fees) {
		this.course_fees = course_fees;
	}

	public String getCourse_info() {
		return course_info;
	}

	public void setCourse_info(String course_info) {
		this.course_info = course_info;
	}


}
