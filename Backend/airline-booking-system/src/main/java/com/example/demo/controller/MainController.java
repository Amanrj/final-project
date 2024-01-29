package com.example.demo.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.FlightData;
import com.example.demo.repositery.FlightDetailsDao;
import com.example.demo.service.Airports;
import com.example.demo.service.FlightService;
import com.example.demo.service.FlightServiceImpl;

import net.bytebuddy.asm.Advice.This;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {
	
	@Autowired
	private FlightService flightService;
	
	
	@Autowired
	private Airports airports;
	
	@GetMapping("/")
	public  String met() {
		return "Hello From Backend";
	}
	@GetMapping("/hello/{name}") 
	 public static String func( @PathVariable("name") String name){
		return "Hello Brother "+name;
	}
	@GetMapping("/flight")
	public  ResponseEntity<List<FlightData>> allFlight() throws Exception{
		
		
		 List<FlightData> list=flightService.viewAllFlight();
		
		return  new ResponseEntity<List<FlightData>>(list,HttpStatus.OK);
	}
	
	@GetMapping("/airports/{name}")
	public ResponseEntity<List<com.example.demo.model.Airports>> getAllAirport(@PathVariable("name") String airportName){
		
		
		
		return  new ResponseEntity<List<com.example.demo.model.Airports>>(airports.findAllAirports(airportName),HttpStatus.OK);
	}

}
