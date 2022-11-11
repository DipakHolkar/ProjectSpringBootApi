package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Course;
import com.example.demo.entities.Feedback;
import com.example.demo.repository.CourseRepository;
import com.example.demo.repository.FeedbackRepository;

@Service
public class FeedbackService {
	
	@Autowired
	FeedbackRepository fRepository;
  
	 public List<Feedback> getFeedback(int institute_id) {
		 
		var feedback =  fRepository.findFeedbackByInstituteId(institute_id);
		return fRepository.findFeedbackByInstituteId(institute_id);
	}
	 
		public Feedback add(Feedback f) {
			
			return fRepository.save(f);
		}

}
