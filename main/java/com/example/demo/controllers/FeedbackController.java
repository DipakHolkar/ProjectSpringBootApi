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

import com.example.demo.bean.CourseRegister;
import com.example.demo.bean.FeedbackPost;
import com.example.demo.entities.Course;
import com.example.demo.entities.Feedback;
import com.example.demo.entities.Student;
import com.example.demo.entities.User;
import com.example.demo.service.CourseService;
import com.example.demo.service.FeedbackService;
import com.example.demo.service.StudentService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class FeedbackController {

	@Autowired
	FeedbackService fService;
	
	@Autowired
	StudentService sService;
	
	@Autowired
	CourseService cService;
	
	
	@GetMapping("/getallfeedbackinstitutewise/{institute_id}")
	public List<Feedback> getFeedback(@PathVariable("institute_id") int institute_id)
	{		
		return fService.getFeedback(institute_id);
	}
	
	
//	@PostMapping("/postfeedback")
//	public ResponseEntity<String> postFeedback(@RequestBody FeedbackPost f )
//	{
//		Feedback feed = new Feedback();
//	
//		feed.setStudent_id(f.getStudent_id());
//		feed.setInstitute_id(f.getInstitute_id());
//		feed.setCourse_id(f.getCourse_id());
//		feed.setFeedback(f.getFeedback());
//		feed.setFeedback_date(f.getFeedback_date());
//		
//		
//		Feedback r= fService.add(feed);
//		
//		if( r.equals(feed))
//		{
//			return new ResponseEntity<String>("Feedback Given Successfully",HttpStatus.OK);
//		}
//		else
//		{
//			return new ResponseEntity<String>("Failed",HttpStatus.NOT_ACCEPTABLE);
//		}
//		
//	}
	
	@PostMapping("/postfeedback")
	public ResponseEntity<String> postFeedback(@RequestBody FeedbackPost f )
	{
		User u=new User();
		u.setUser_id(f.getStudent_id());	
				
		Optional<Student> s = sService.findByID(f.getStudent_id());
		
		Optional<Course> cc = cService.findById(f.getCourse_id());
		
		Course c=new Course();
		c.setCourse_id(f.getCourse_id());
		
		
		Feedback feed = new Feedback();
		
		feed.setStudent(s.get());
		feed.setInstitute_id(f.getInstitute_id());
		feed.setCourse(cc.get());
		feed.setFeedback(f.getFeedback());
		feed.setFeedback_date(f.getFeedback_date());
		
		
		Feedback r= fService.add(feed);
		
		if( r.equals(feed))
		{
			return new ResponseEntity<String>("Feedback Given Successfully",HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<String>("Failed",HttpStatus.NOT_ACCEPTABLE);
		}
		
	}
	
	
	
	
}
