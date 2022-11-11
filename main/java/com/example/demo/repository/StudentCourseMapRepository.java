package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.StudentCourseMap;

@Repository
public interface StudentCourseMapRepository extends JpaRepository<StudentCourseMap, Integer> {

	@Query(value ="select * from student_crs_map where student_id=:student_id and course_id=:course_id",nativeQuery = true)
	Optional<StudentCourseMap> checkEnroll(int student_id, int course_id);

	@Query(value ="select * from student_crs_map where course_id=:course_id",nativeQuery = true)
	List<StudentCourseMap> findStudentIdByCourseId(int course_id);
	
	
	
	
	
}
