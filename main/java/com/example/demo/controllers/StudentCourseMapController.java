package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.bean.StudentEnrollCourse;
import com.example.demo.entities.Course;
import com.example.demo.entities.Student;
import com.example.demo.entities.StudentCourseMap;
import com.example.demo.service.StudentCourseMapService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class StudentCourseMapController {

	@Autowired
	StudentCourseMapService scmService;
	
	@PostMapping("/studentenroll")
	public ResponseEntity<String> studentEnroll (@RequestBody StudentEnrollCourse s)
	{
		int sid=s.getStudent_id();
		int cid=s.getCourse_id();
		
		Optional<StudentCourseMap> checkEn=scmService.checkEnroll(sid,cid);
		
		StudentCourseMap se=new StudentCourseMap();
		StudentCourseMap r=new StudentCourseMap();		
		
		
		if(!checkEn.isPresent()) 
		{
				
		se.setStudent_id(s.getStudent_id());
		se.setCourse_id(s.getCourse_id());
		
		 r=scmService.save(se);	
		}
		
		if( r.equals(se))
		{
			return new ResponseEntity<String>("Course Added Successfully",HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Failed",HttpStatus.NOT_ACCEPTABLE);
		}
		}
	
	
		
		@GetMapping("/findstudentbycourseid/{course_id}")
		public List<Student> findStudentIdByCourseId(@PathVariable("course_id") int course_id)
		{		
			return scmService.findStudentIdByCourseId(course_id);
		}
	
	
	
		
}
