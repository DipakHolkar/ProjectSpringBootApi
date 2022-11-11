package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_crs_map")
public class StudentCourseMap {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int smap_id;
	
	@Column
	private int student_id;
	
	@Column
	private int course_id;

	public StudentCourseMap() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StudentCourseMap(int smap_id, int student_id, int course_id) {
		super();
		this.smap_id = smap_id;
		this.student_id = student_id;
		this.course_id = course_id;
	}

	public int getSmap_id() {
		return smap_id;
	}

	public void setSmap_id(int smap_id) {
		this.smap_id = smap_id;
	}

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}	
	
}
