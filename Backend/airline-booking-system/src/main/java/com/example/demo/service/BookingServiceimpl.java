package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BookingDetails;
import com.example.demo.repositery.BookingDetailsDao;

@Service
public class BookingServiceimpl implements BookingService{
	
	@Autowired
	private BookingDetailsDao bookingDetails;

	@Override
	public BookingDetails saveBooking(BookingDetails bookingdetails) throws Exception {
		
		return bookingDetails.save(bookingdetails);
	}

	@Override
	public List<BookingDetails> getAllBooking() throws Exception {
		
		return bookingDetails.findAll();
	}

}
