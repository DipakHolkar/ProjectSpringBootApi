package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Student;
import com.example.demo.entities.StudentCourseMap;
import com.example.demo.repository.StudentCourseMapRepository;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentCourseMapService {
	
	@Autowired
	StudentCourseMapRepository scmRepository;
	
	@Autowired
	StudentRepository srepo;
	
	

	public StudentCourseMap save(StudentCourseMap se) {
		
		return scmRepository.save(se);
	}
	
	public Optional<StudentCourseMap> checkEnroll(int sid, int cid) {
		// TODO Auto-generated method stub
		return scmRepository.checkEnroll(sid,cid);
	}
	
	
	
	public List<Student> findStudentIdByCourseId(int course_id) {
		
		List<StudentCourseMap> sidlist=scmRepository.findStudentIdByCourseId(course_id);
		
		List<Integer>sid=new ArrayList<Integer>();
		
		for(int i=0; i< sidlist.size();i++)
		{
			sid.add(i,(sidlist.get(i).getStudent_id()));
			
		}
			
		
		return srepo.findStudentById(sid);
	}
	
	

}
	


