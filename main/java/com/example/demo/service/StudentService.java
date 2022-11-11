package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Institute;
import com.example.demo.entities.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentService {
	
	@Autowired
	StudentRepository srepo;
	
	public List<Student> getAll() {
		return srepo.findAll();
	}

	public Student add(Student s)
	{
		return srepo.save(s);
	}
//	public Optional<Student> findByID(int student_id) {
//		 
//		return srepo.findById(student_id);
//	}

	public Optional<Student> findByID(int student_id) {
		 
		return srepo.findByStudentId(student_id);
	}
	@Transactional
	public void deleteStudent(int id) {
		//cousre seervice
		srepo.deleteById(id);
	}

	
}
