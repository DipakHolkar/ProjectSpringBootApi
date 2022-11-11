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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Institute;
import com.example.demo.entities.InstituteRegistration;
import com.example.demo.entities.Student;
import com.example.demo.entities.StudnetRegister;
import com.example.demo.entities.User;
import com.example.demo.service.StudentService;
import com.example.demo.service.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class StudentController {
	
	@Autowired
	StudentService sservice;
	
	@Autowired
	UserService uservice;
	
	 @GetMapping("/allregisterstudent") 
	    public List<Student> getAll() 
	    { 
	    	return sservice.getAll(); 
	    }
	
	@PostMapping("/registerstudent")
	public Student registrationStudent(@RequestBody StudnetRegister sr )
	{
		User u = new User(sr.getUsername(),sr.getPassword(),"student");
		//User inserted= uservice.add(u);
		
		 Student s= new Student(sr.getFirstname(),sr.getLastname(),sr.getQualification(),sr.getEmailid(),sr.getContactno(),u);
		 return sservice.add(s);
	}
	
	@GetMapping("/getStudentById/{student_id}") 
    public ResponseEntity<Student> getStudentById(@PathVariable("student_id") Integer student_id)
    {
    	Optional<Student> student= sservice.findByID(student_id);
    	 if(student.isPresent())
    	 {
    		 Student i= student.get();
    		 return new ResponseEntity<>(i,HttpStatus.OK);	 
    	 }
    	 else
		 {
			 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		 }
    }

	  @PutMapping("/updatestudent/{student_id}") 
	  public ResponseEntity<String> updateStudents(@PathVariable("student_id") int student_id,@RequestBody StudnetRegister str) 
	  { 
		  
		  Optional<Student> student= sservice.findByID(student_id);
		  if(student.isPresent())
		 {
			  Student i= student.get();
			 i.setFirstname(str.getFirstname());
			 i.setLastname(str.getLastname());
			 i.setQualification(str.getQualification());		  	 
			 i.setEmailid(str.getEmailid());
			 sservice.add(i);
			 return new ResponseEntity<>("Student updated succesfully",HttpStatus.OK);
		 }
		 else
		 {
			 return new ResponseEntity<>("Student not found for given id",HttpStatus.NOT_FOUND);
		 }
	  }
	  @DeleteMapping("/deleteStudent/{id}")
		 public ResponseEntity<String> deleteStudent(@PathVariable("id") int id)
		 {
			 Optional<Student> Student= sservice.findByID(id);
			 if(Student.isPresent())
			 {
				 sservice.deleteStudent(id);
				 return new ResponseEntity<>("Student is found and deleted successfully",HttpStatus.OK);
			 }
			 else
			 {
				 return new ResponseEntity<>("Enaable Student ",HttpStatus.NOT_FOUND);
			 }
		 }  
	

}
