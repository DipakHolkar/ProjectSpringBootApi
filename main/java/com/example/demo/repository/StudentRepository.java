package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
	@Query("select s from Student s where student_id=:student_id")
	public Optional<Student> findByStudentId(int student_id);
	
	@Query(value ="select * from student where student_id in(:student_id)",nativeQuery = true)
	List<Student> findStudentById(@Param("student_id")List<Integer> sid);
}
