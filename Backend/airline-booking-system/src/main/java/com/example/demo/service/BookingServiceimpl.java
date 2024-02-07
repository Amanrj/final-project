package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BookingDetails;
import com.example.demo.model.CustomerAddress;
import com.example.demo.model.PersonDetails;
import com.example.demo.model.UserDetails;
import com.example.demo.repositery.BookingDetailsDao;
import com.example.demo.repositery.CustomerAddressDao;
import com.example.demo.repositery.PersonDetailsDao;
import com.example.demo.repositery.UserDetailsDao;

@Service
public class BookingServiceimpl implements BookingService {

	@Autowired
	private BookingDetailsDao bookingDetails;

	@Autowired
	private CustomerAddressDao customerAddressDao;

	@Autowired
	private PersonDetailsDao personDetailsDao;

	@Autowired
	private UserDetailsDao userDao;

	@Override
	public BookingDetails saveBooking(BookingDetails bookingdetails, String user) throws Exception {
	    UserDetails findedUser = userDao.findByemail(user);

	    if (findedUser != null) {
	        // Add booking to user's bookings

	        // Save customer address
	        CustomerAddress address = bookingdetails.getAddress();
	        if (address != null) {
	            customerAddressDao.save(address);
	        }

	        // Save person details
	        List<PersonDetails> persondetails = bookingdetails.getPersonDetails();
	        if (persondetails != null && !persondetails.isEmpty()) {
	            personDetailsDao.saveAll(persondetails);
	        }

	        BookingDetails bookingDetail= bookingDetails.save(bookingdetails);
	       
	        findedUser.getAllBookigs().add(bookingDetail);
	        userDao.save(findedUser);
	        
	        return bookingDetail;
	    } else {
	        throw new Exception("User not found with email: " + user);
	    }
	}
	

	@Override
	public List<BookingDetails> getAllBooking(String user) throws Exception {

		UserDetails findedUser = userDao.findByemail(user);
		if(findedUser!=null) {
			return findedUser.getAllBookigs();
		}else {
			throw new Exception("User Not Found");
		}

		
	}

	@Override
	public List<BookingDetails> deletAllBooking() throws Exception {
		List<BookingDetails> allBooking = bookingDetails.findAll();
		bookingDetails.deleteAll();
		return allBooking;
	}

}
