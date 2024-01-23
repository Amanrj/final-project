package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repositery.AirportDao;


@Service
public class AirportServiceimpl implements Airports {
	
	@Autowired
	private AirportDao airportDao;

	@Override
	public  List<com.example.demo.model.Airports> findAllAirports(String name) {
		
		return airportDao.findByAllFields(name);
	}

}
