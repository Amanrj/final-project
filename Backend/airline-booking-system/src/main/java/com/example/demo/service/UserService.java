package com.example.demo.service;

import java.util.List;

import com.example.demo.model.UserDetails;

public interface UserService {
	
	public UserDetails saveuser(UserDetails user) throws Exception;
	public List<UserDetails> getAllUser()throws Exception;
	
}
