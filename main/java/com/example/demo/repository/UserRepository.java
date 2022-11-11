package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query(value ="select * from user where username=:username and password=:password",nativeQuery = true)
	public Optional<User> findByUsernameAndPassword(String username, String password);
	
}
