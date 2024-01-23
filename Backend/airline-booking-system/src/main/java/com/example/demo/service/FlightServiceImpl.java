package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.FlightData;
import com.example.demo.repositery.FlightDetailsDao;


@Service
public class FlightServiceImpl implements FlightService {
	
	
	@Autowired
	private FlightDetailsDao flighdetaildao;

	@Override
	public List<FlightData> viewAllFlight() {
		
		List<FlightData> data=flighdetaildao.findAll();
		
		return data;
	}

	@Override
	public FlightData viewOneFlight() {
		
		return null;
	}

}
