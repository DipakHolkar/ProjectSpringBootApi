package com.example.demo.controllers;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Institute;
import com.example.demo.entities.InstituteRegistration;
import com.example.demo.entities.User;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.InstituteRepository;
import com.example.demo.service.CourseService;
import com.example.demo.service.InstituteService;
import com.example.demo.service.UserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class InstituteController {
	@Autowired
	InstituteService iservice;
	@Autowired
	UserService uservice;
	@Autowired
	InstituteRepository irepo;
	@Autowired
	CourseRepository cRepository;
	@Autowired
	CourseService cService;
	
	@GetMapping("/getallintitutes")
	public List<Institute> getAllInstitutes()
	{
		List<Institute> l = iservice.getAllInstitutes();
		System.out.println(l);
		return iservice.getAllInstitutes();
		
	}
	
	
    @GetMapping("/all") 
    public List<Institute> getAll() 
    { 
    	return iservice.getAll(); 
    }
 
    @GetMapping("/getInstituteById/{id}") 
    public ResponseEntity<Institute> getInstituteById(@PathVariable("id") Integer id)
    {
    	Optional<Institute> institute= iservice.findByID(id);
    	 if(institute.isPresent())
    	 {
    		 Institute i= institute.get();
    		 return new ResponseEntity<>(i,HttpStatus.OK);	 
    	 }
    	 else
		 {
			 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		 }
    }
    
   
	@PostMapping("/registerinstitute")
	public Institute registrationInstitute(@RequestBody InstituteRegistration ins )
	{
		//User u = new User(ins.getUsername(),ins.getPassword(),"institute");
		//User inserted= uservice.add(u);
		User u = new User(ins.getUsername(),ins.getPassword(),"institute");
		Institute i=new Institute(ins.getInstituteName(),ins.getAddress(),ins.getEmailId(),ins.getContactNum(),ins.getAuthorizationStatus(),u);
		return iservice.saveInstitute(i);
	}	
	
	
	
	
	
	  @PutMapping("/updateinstitute/{id}") 
	  public ResponseEntity<String> updateInstitute(@PathVariable("id") int id,@RequestBody InstituteRegistration ins) 
	  { 
		 //Optional<Institute> institute= irepo.findById(id);
		  Optional<Institute> institute= iservice.findByID(id);
		  if(institute.isPresent())
		 {
			 Institute i= institute.get();
			 i.setInstituteName(ins.getInstituteName());
			 i.setAddress(ins.getAddress());
			 i.setContactNum(ins.getContactNum());
			 //i.setAuthorizationStatus(ins.getAuthorizationStatus());		 
			 i.setEmailId(ins.getEmailId());
			 iservice.saveInstitute(i);
			 //irepo.save(i);
			 return new ResponseEntity<>("Institute updated succesfully",HttpStatus.OK);
		 }
		 else
		 {
			 return new ResponseEntity<>("Institute not found for given id",HttpStatus.NOT_FOUND);
		 }
	  }
		  
	 @PatchMapping("/updateAthorized/{id}") 
	  public ResponseEntity<String> updateAthorization(@PathVariable("id") int id,@RequestBody InstituteRegistration ins) 
	  { 
		 //Optional<Institute> institute= irepo.findById(id);
		 Optional<Institute> institute= iservice.findByID(id);
		 if(institute.isPresent())
		 {
			 Institute i= institute.get();
			 i.setAuthorizationStatus(ins.getAuthorizationStatus());
			 iservice.saveInstitute(i);
			 //irepo.save(i);
			 return new ResponseEntity<>("Institute updated successfully",HttpStatus.OK);
		 }
		 else
		 {
			 return new ResponseEntity<>("Institute not found for given id",HttpStatus.NOT_FOUND);
		 }
		  
	  } 
	 
//	 @PutMapping("/updateauthosize/{id}") 
//	  public ResponseEntity<String> updateInAuthosize(@PathVariable("id") int id,@RequestBody InstituteRegistration ins) 
//	  { 
//		 //Optional<Institute> institute= irepo.findById(id);
//		  Optional<Institute> institute= iservice.findByID(id);
//		  if(institute.isPresent())
//		 {
//			 Institute i= institute.get();
//			 i.setInstituteName(ins.getInstituteName());
//			 i.setAddress(ins.getAddress());
//			 i.setContactNum(ins.getContactNum());
//			 i.setAuthorizationStatus(ins.getAuthorizationStatus());		 
//			 i.setEmailId(ins.getEmailId());
//			 iservice.saveInstitute(i);
//			 //irepo.save(i);
//			 return new ResponseEntity<>("Institute updated succesfully",HttpStatus.OK);
//		 }
//		 else
//		 {
//			 return new ResponseEntity<>("Institute not found for given id",HttpStatus.NOT_FOUND);
//		 }
//	  }
	 @PutMapping("/updateauthosize/{id}") 
	  public ResponseEntity<String> updateInAuthosize(@PathVariable("id") int id,@RequestBody InstituteRegistration ins) 
	  { 
		 //Optional<Institute> institute= irepo.findById(id);
		  Optional<Institute> institute= iservice.findByID(id);
		  if(institute.isPresent())
		 {
			 Institute i= institute.get();
			 i.setInstituteName(ins.getInstituteName());
			 i.setAddress(ins.getAddress());
			 i.setContactNum(ins.getContactNum());
			 i.setAuthorizationStatus(ins.getAuthorizationStatus());		 
			 i.setEmailId(ins.getEmailId());
			 iservice.saveInstitute(i);
			 //irepo.save(i);
			 return new ResponseEntity<>("Institute updated succesfully",HttpStatus.OK);
		 }
		 else
		 {
			 return new ResponseEntity<>("Institute not found for given id",HttpStatus.NOT_FOUND);
		 }
	  }
	 
	 @DeleteMapping("/deleteInstitute/{id}")
	 public ResponseEntity<String> deleteInstitute(@PathVariable("id") int id)
	 {
		 Optional<Institute> institute= iservice.findByID(id);
		 if(institute.isPresent())
		 {
			 cService.deleteAllInstitutewise(id);
			 iservice.deleteInstitute(id);
			 return new ResponseEntity<>("Institute is found and deleted successfully",HttpStatus.OK);
		 }
		 else
		 {
			 return new ResponseEntity<>("Enaable Institute ",HttpStatus.NOT_FOUND);
		 }
	 }  
}

