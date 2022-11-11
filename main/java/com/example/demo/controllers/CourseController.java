package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.bean.CourseRegister;
import com.example.demo.entities.Course;
import com.example.demo.repository.CourseRepository;
import com.example.demo.service.CourseService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CourseController
{
	
	@Autowired
	CourseService cService;
	
	//@Autowired
	//CourseRepository cRepo;
//	@GetMapping("/getallcourses")
//	public List<Course> getAll()
//	{		
//		return cRepo.findByCourseIdIn(List.of(4,5,6));
//	}
	
	@GetMapping("/getcoursebyid/{course_id}")
	public Optional<Course> getCourseByID(@PathVariable("course_id") int course_id)
	{		
		return cService.getCourseById(course_id);
	}
	
	@GetMapping("/getallcoursesinstitutewise/{institute_id}")
	public List<Course> getCourses(@PathVariable("institute_id") int institute_id)
	{		
		return cService.getCourses(institute_id);
	}
	
	@PostMapping("/addcourse")
	public ResponseEntity<String> registrationCourse(@RequestBody CourseRegister c )
	{
		Course cou = new Course();
		cou.setInstitute_id(c.getInstitute_id());
		cou.setCourse_name(c.getCourse_name());
		cou.setCourse_duration(c.getCourse_duration());
		cou.setCourse_details(c.getCourse_details());
		cou.setCourse_fees(c.getCourse_fees());
		cou.setCourse_info(c.getCourse_info());
		
		Course r= cService.add(cou);
		
		if( r.equals(cou))
		{
			return new ResponseEntity<String>("Course Added Successfully",HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Failed",HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
	
	
	
	@PutMapping("/updatecourse/{course_id}")
	  public ResponseEntity<String> update(@PathVariable("course_id") int course_id, @RequestBody Course c) {
	    Optional<Course> r = cService.findById(course_id);

	    if (r.isPresent()) {
	    	Course cu = r.get();
	    	
	    	cu.setCourse_name(c.getCourse_name());
	    	cu.setCourse_duration(c.getCourse_duration());
	    	cu.setCourse_details(c.getCourse_details());
	    	cu.setCourse_fees(c.getCourse_fees());
	    	cu.setCourse_info(c.getCourse_info());
	    	cService.update(cu);
	      return new ResponseEntity<String>("Update Course Successfully", HttpStatus.OK);
	    } 
	    else {
	      return new ResponseEntity<>("Course Not Found",HttpStatus.NOT_FOUND);
	    }
	  }
	
	
	@DeleteMapping("/deletecourse/{course_id}")
	  public ResponseEntity<HttpStatus> delete(@PathVariable("course_id") int course_id) {
	    try {
	    	cService.deleteBId(course_id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } 
	    catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	
	@DeleteMapping("/deleteallcourseinstitutewise/{institute_id}")
	  public ResponseEntity<HttpStatus> deleteAllInstitutewise(@PathVariable("institute_id") int institute_id) {
	    try {
	    	cService.deleteAllInstitutewise(institute_id);
	    	
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } 
	    catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	
	

}
