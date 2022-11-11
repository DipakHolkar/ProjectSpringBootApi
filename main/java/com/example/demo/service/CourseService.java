package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entities.Course;
import com.example.demo.repository.CourseRepository;

@Service
public class CourseService {

	@Autowired
	CourseRepository cRepository;
	
	//get Courses
	public List<Course> getAll()
	{
		return cRepository.findAll();
	}

	//Add Courses
	public Course add(Course c) {
		
		return cRepository.save(c);
	}

	//Find Course
	public Optional<Course> findById(int id) {
		
		return cRepository.findById(id);
	
	}
	//Update Course
	public Course update(Course c) {
		
		return cRepository.saveAndFlush(c);
	}
	
	//Delete Courses
	public void deleteBId(int id) {
		 cRepository.deleteById(id);
		
	}
	
	///Get Courses institute wise
	public List<Course> getCourses(int institute_id) {
		
		return cRepository.findCoursesByInstituteId(institute_id);
	}

	//Delete Courses institute wise
	public int deleteAllInstitutewise(int institute_id) {
		// TODO Auto-generated method stub
		return cRepository.deleteAllInstitutewise(institute_id);
	}
	
	///Get Courses By ID
	public Optional<Course> getCourseById(int course_id) {
		
		return cRepository.findById(course_id);
	}

	
}