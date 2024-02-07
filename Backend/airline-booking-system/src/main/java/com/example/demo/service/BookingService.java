package com.example.demo.service;

import java.util.List;

import com.example.demo.model.BookingDetails;

public interface BookingService {
	
	public BookingDetails saveBooking(BookingDetails bookingdetails)throws Exception;
	public List<BookingDetails> getAllBooking()throws Exception;
	
}
