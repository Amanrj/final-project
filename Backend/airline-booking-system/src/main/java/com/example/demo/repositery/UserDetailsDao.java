package com.example.demo.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.UserDetails;

public interface UserDetailsDao extends JpaRepository<UserDetails, String> {

}
