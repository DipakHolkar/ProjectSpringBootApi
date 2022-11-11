package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entities.Course;



@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

	@Query(value ="select * from course where institute_id=:institute_id",nativeQuery = true)
	public List<Course> findCoursesByInstituteId(int institute_id);
	
	@Modifying
    @Transactional
	@Query(value ="delete from course where institute_id=:institute_id",nativeQuery = true)
	public int deleteAllInstitutewise(int institute_id);

	/*@Query(value ="select * from course where course_id=:course_id",nativeQuery = true)
	public Course getCourseById(int course_id);*/
	
	
	//public List<Course> findByCourseIdIn(List<Integer> ids);
	
}
