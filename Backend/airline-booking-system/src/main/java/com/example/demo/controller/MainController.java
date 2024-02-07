package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.BookingDetails;
import com.example.demo.model.FlightData;
import com.example.demo.model.UserDetails;
import com.example.demo.service.Airports;
import com.example.demo.service.BookingService;
import com.example.demo.service.FlightService;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MainController {

	@Autowired
	private FlightService flightService;

	@Autowired
	private Airports airports;

	@Autowired
	private UserService userService;
	
	@Autowired
	private BookingService bookingservice;

	@GetMapping("/flight")
	public ResponseEntity<List<FlightData>> allFlight() throws Exception {
		List<FlightData> list = flightService.viewAllFlight();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@GetMapping("/airports/{name}")
	public ResponseEntity<List<com.example.demo.model.Airports>> getAllAirporat(
			@PathVariable("name") String airportName) {
		return new ResponseEntity<>(airports.findAllAirports(airportName), HttpStatus.OK);
	}

	@GetMapping("/flight/{number}")
	public ResponseEntity<List<FlightData>> findFligtByNumber(@PathVariable("number") String number) throws Exception {
		return new ResponseEntity<>(flightService.FindByFlightNumber(number), HttpStatus.OK);
	}

	@GetMapping("/flight/{origin}/{destination}")
	public ResponseEntity<List<FlightData>> findFlightByOriginDestination(@PathVariable("origin") String origin,
			@PathVariable("destination") String destination) throws Exception {
		return new ResponseEntity<>(flightService.findFlightByOriginToDestination(origin, destination), HttpStatus.OK);
	}
	
//	??User Things

	@PostMapping("/user")
	public ResponseEntity<UserDetails> saveOrVeryfyUser(@RequestBody UserDetails userdetails) throws Exception {

		return new ResponseEntity<UserDetails>(userService.saveuser(userdetails), HttpStatus.OK);
	}

	@GetMapping("/user")
	public ResponseEntity<List<UserDetails>> getAllUser() throws Exception {

		return new ResponseEntity<List<UserDetails>>(userService.getAllUser(), HttpStatus.OK);
	}
	@DeleteMapping("/user")
	public ResponseEntity<String> deleteAllUser() throws Exception{
		return new ResponseEntity<String>(userService.deleteAllUser(),HttpStatus.OK);
	}
	
	
//	Booking Test
	
	@GetMapping("/booking/{user}")
	public ResponseEntity<List<BookingDetails>> getAllBooking(@PathVariable("user") String user) throws Exception{
		return new ResponseEntity<List<BookingDetails>>(bookingservice.getAllBooking(user),HttpStatus.OK);
	}
	@PostMapping("/booking/{user}")
	public ResponseEntity<BookingDetails> saveBooking(@RequestBody BookingDetails bookingDetails,@PathVariable("user") String user) throws Exception{
		return new ResponseEntity<BookingDetails>( bookingservice.saveBooking(bookingDetails,user),HttpStatus.OK);
	}
	@DeleteMapping("/booking")
	public ResponseEntity<List<BookingDetails>> deleteBooking() throws Exception{
		return new ResponseEntity<List<BookingDetails>>(bookingservice.deletAllBooking(),HttpStatus.OK);
	}
}
