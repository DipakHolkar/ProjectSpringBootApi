package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Institute;
import com.example.demo.repository.InstituteRepository;

@Service
public class InstituteService {
	@Autowired
	InstituteRepository irepo;
	
	
	public List<Institute> getAllInstitutes()
	{
		return irepo.getAllAuthorizedInst();
	}
	
	
	public List<Institute> getAll() {
		return irepo.findAll();
	}

	public Institute saveInstitute(Institute ins) {
		return irepo.save(ins);
	}

//	public Optional<Institute> findByID(int id) {
//		 
//		return irepo.findById(id);
//	}
	public Optional<Institute> findByID(int institute_id) {
		 
		return irepo.findByInstituteID(institute_id);
	    }
	
	@Transactional
	public void deleteInstitute(int id) {
		//cousre seervice
		 irepo.deleteById(id);
	}

	/*public Optional<Institute> getInstituteById(int institute_id) {
		
		return irepo.findById(institute_id);
	}
	*/
	/*
	 * public boolean deleteStudent(int rollno) 
	{
		boolean flag = false;
		try {
			
		srepo.deleteById(rollno);
		flag = true;
		}
		catch (Exception e) {
			flag = false;
		}
		return flag;
	}
	 */

	  /*public int updateInstitude(int iid,Institute ins )
	  { 
		  return irepo.updateAothorized(iid,ins); 
	  }*/
	/*public  Optional<Institute> getbyId(int id)
	{
		return irepo.findById(id);
	}

	  public int updateInstitude(int iid,Institute ins )
	  { 
		  return irepo.updateAll(iid,ins); 
	  }
	 
	 */

}
