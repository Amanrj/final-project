package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.json.JSONException;
import org.json.JSONObject;
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
import com.razorpay.Order;
import com.razorpay.RazorpayException;

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

	@Autowired
	private RozerPay rozerPay;

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

			try {
				Integer amount = Integer.parseInt(bookingdetails.getEconomyFare()) * bookingdetails.getPerson();

				Order createdOrder = rozerPay.createOrder(amount * 100);
				String orderJson = createdOrder.toString();
				JSONObject orderJsonObject = new JSONObject(orderJson);
				String id = orderJsonObject.getString("id");
				String receipt = orderJsonObject.getString("receipt");
				String bookindStatus = orderJsonObject.getString("status");
//				System.out.println("ID: " + id);
//				System.out.println("Receipt: " + receipt);
//				System.out.println(createdOrder.toString());
				bookingdetails.setOrderId(id);
				bookingdetails.setRecipt(receipt);
				bookingdetails.setOrderStatus(bookindStatus);
			} catch (RazorpayException | JSONException e) {
//				System.err.println("Error creating order: " + e.getMessage());
				throw new Exception(e.getMessage());
			}

			try {

				BookingDetails bookingDetail = bookingDetails.save(bookingdetails);

				findedUser.getAllBookigs().add(bookingDetail);
				userDao.save(findedUser);

				return bookingDetail;
			} catch (Exception e) {
				throw new Exception(e.getMessage());
			}

		} else {
			throw new Exception("User not found with email: " + user);
		}
	}

	@Override
	public List<BookingDetails> getAllBooking(String user) throws Exception {

		UserDetails findedUser = userDao.findByemail(user);
		if (findedUser != null) {
			return findedUser.getAllBookigs();
		} else {
			throw new Exception("User Not Found");
		}

	}

	@Override
	public List<BookingDetails> deletAllBooking() throws Exception {
		List<BookingDetails> allBooking = bookingDetails.findAll();
		bookingDetails.deleteAll();
		return allBooking;
	}

	@Override
	public String saveBookigConform(String id) throws Exception {

		Optional<BookingDetails> findedBooking = bookingDetails.findById(Integer.parseInt(id));

		if (findedBooking.isPresent()) {
			BookingDetails booking = findedBooking.get();
			booking.setOrderStatus("paid");
			bookingDetails.save(booking);

		} else {
			throw new Exception("Booking Details Not Found");
		}
		return "Paid";
	}

}
