package com.example.demo.repositery;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.UserDetails;

public interface UserDetailsDao extends JpaRepository<UserDetails, String> {
	
	UserDetails findByemail(String sub);
	
	

}
