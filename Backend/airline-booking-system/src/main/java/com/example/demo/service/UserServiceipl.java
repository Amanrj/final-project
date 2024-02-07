package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserDetails;
import com.example.demo.repositery.UserDetailsDao;

@Service
public class UserServiceipl implements UserService {

	@Autowired
	private UserDetailsDao userDao;

	@Override
	public UserDetails saveuser(UserDetails user) throws Exception {

		UserDetails findedUser = userDao.findByemail(user.getEmail());

		if (findedUser != null) {
			return findedUser;
		} else {
			return userDao.save(user);
		}

	}

	@Override
	public List<UserDetails> getAllUser() throws Exception {

		return userDao.findAll();
	}

	@Override
	public String deleteAllUser() throws Exception {
		userDao.deleteAll();
		return "User Delete ";
	}

}
