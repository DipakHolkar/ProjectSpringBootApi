package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Institute;
@Transactional
@Repository
public interface InstituteRepository extends JpaRepository<Institute, Integer> {
	
	 /* @Modifying
	 
	  @Query(value="update institute set authorization_status = ?2 where institute_id = ?1",nativeQuery = true) 
	  public int updateAothorized(int iid, Institute ins);*/
	  

	/* @Modifying
	 @Query(value="update institute set institute_name =?1,address=?,emailid=?3,contact_num=?4,authorization_status=?4 Where product_id=?5",nativeQuery=true) 
	 public int updateAll(int id,Institute ins);
	 //public int updateAll(String institute_name,String address,String emailid ,int contact_num,String authorization_status);
		*/ 
	@Query(value="select * from institute where authorization_status='authorized'", nativeQuery = true)
	public List<Institute> getAllAuthorizedInst();
	
	@Query("select i from Institute i where institute_id=:institute_id")
	Optional<Institute> findByInstituteID(int institute_id);

}


 