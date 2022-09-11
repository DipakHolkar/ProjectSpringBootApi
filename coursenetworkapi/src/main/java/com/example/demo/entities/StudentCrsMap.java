package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_crs_map")
public class StudentCrsMap {

	@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="smap_id")
	private int smapId;
	
	@Column(name="student_id")
	private int studentId;
	
	@Column(name="course_inst_mapping")
	private int courseInstMapping;
}
