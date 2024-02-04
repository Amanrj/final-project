package com.example.demo.service;

import java.util.List;

import com.example.demo.model.FlightData;



public interface FlightService {
		
	public List<FlightData> viewAllFlight() throws Exception;
	public FlightData viewOneFlight() throws Exception;
	public List<FlightData> FindByFlightNumber(String flightNumber) throws Exception;
	public List<FlightData> findFlightByOriginToDestination(String origin,String destination) throws Exception;
	
}
