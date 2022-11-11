package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
	
	@Query(value ="select * from feedback where institute_id=:institute_id",nativeQuery=true)
	public List<Feedback> findFeedbackByInstituteId(int institute_id);
	
	
	
}
