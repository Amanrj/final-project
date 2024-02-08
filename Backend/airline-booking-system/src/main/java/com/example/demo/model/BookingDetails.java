package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import com.razorpay.Order;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;


@Entity
@Data
public class BookingDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer bookingDetailsId;
	
	@OneToOne(cascade = CascadeType.ALL)
    private CustomerAddress address;
	
    private String airline;
    private String airlineCode;
    private String arrivalTime;
    private String arrivalWeekday;
    private String businessFare;
    private String date;
    private String departTime;
    private String departWeekday;
    private String destination;
    private String duration;
    private String economyFare;
    private String firstFare;
    private int flightId;
    private String flightNo;
    private String origin;
    private int person;
    
    private String orderId;
    private String recipt;
    private String orderStatus;
    
    @OneToMany(cascade = CascadeType.ALL)
    private List<PersonDetails> personDetails;

    // Constructor
    public BookingDetails() {
        personDetails = new ArrayList<>();
    }

    // Getters and setters
    public CustomerAddress getAddress() {
        return address;
    }

    public void setAddress(CustomerAddress address) {
        this.address = address;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getAirlineCode() {
        return airlineCode;
    }

    public void setAirlineCode(String airlineCode) {
        this.airlineCode = airlineCode;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getArrivalWeekday() {
        return arrivalWeekday;
    }

    public void setArrivalWeekday(String arrivalWeekday) {
        this.arrivalWeekday = arrivalWeekday;
    }

    public String getBusinessFare() {
        return businessFare;
    }

    public void setBusinessFare(String businessFare) {
        this.businessFare = businessFare;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDepartTime() {
        return departTime;
    }

    public void setDepartTime(String departTime) {
        this.departTime = departTime;
    }

    public String getDepartWeekday() {
        return departWeekday;
    }

    public void setDepartWeekday(String departWeekday) {
        this.departWeekday = departWeekday;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getEconomyFare() {
        return economyFare;
    }

    public void setEconomyFare(String economyFare) {
        this.economyFare = economyFare;
    }

    public String getFirstFare() {
        return firstFare;
    }

    public void setFirstFare(String firstFare) {
        this.firstFare = firstFare;
    }

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public String getFlightNo() {
        return flightNo;
    }

    public void setFlightNo(String flightNo) {
        this.flightNo = flightNo;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public int getPerson() {
        return person;
    }

    public void setPerson(int person) {
        this.person = person;
    }

    public List<PersonDetails> getPersonDetails() {
        return personDetails;
    }

    public void setPersonDetails(List<PersonDetails> personDetails) {
        this.personDetails = personDetails;
    }

	public Integer getBookingDetailsId() {
		return bookingDetailsId;
	}

	public void setBookingDetailsId(Integer bookingDetailsId) {
		this.bookingDetailsId = bookingDetailsId;
	}


	public String getOrderId() {
		return orderId;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public String getRecipt() {
		return recipt;
	}

	public void setRecipt(String recipt) {
		this.recipt = recipt;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	@Override
	public String toString() {
		return "BookingDetails [bookingDetailsId=" + bookingDetailsId + ", address=" + address + ", airline=" + airline
				+ ", airlineCode=" + airlineCode + ", arrivalTime=" + arrivalTime + ", arrivalWeekday=" + arrivalWeekday
				+ ", businessFare=" + businessFare + ", date=" + date + ", departTime=" + departTime
				+ ", departWeekday=" + departWeekday + ", destination=" + destination + ", duration=" + duration
				+ ", economyFare=" + economyFare + ", firstFare=" + firstFare + ", flightId=" + flightId + ", flightNo="
				+ flightNo + ", origin=" + origin + ", person=" + person + ", orderId=" + orderId + ", recipt=" + recipt
				+ ", orderStatus=" + orderStatus + ", personDetails=" + personDetails + "]";
	}

	public BookingDetails(Integer bookingDetailsId, CustomerAddress address, String airline, String airlineCode,
			String arrivalTime, String arrivalWeekday, String businessFare, String date, String departTime,
			String departWeekday, String destination, String duration, String economyFare, String firstFare,
			int flightId, String flightNo, String origin, int person, String orderId, String recipt, String orderStatus,
			List<PersonDetails> personDetails) {
		super();
		this.bookingDetailsId = bookingDetailsId;
		this.address = address;
		this.airline = airline;
		this.airlineCode = airlineCode;
		this.arrivalTime = arrivalTime;
		this.arrivalWeekday = arrivalWeekday;
		this.businessFare = businessFare;
		this.date = date;
		this.departTime = departTime;
		this.departWeekday = departWeekday;
		this.destination = destination;
		this.duration = duration;
		this.economyFare = economyFare;
		this.firstFare = firstFare;
		this.flightId = flightId;
		this.flightNo = flightNo;
		this.origin = origin;
		this.person = person;
		this.orderId = orderId;
		this.recipt = recipt;
		this.orderStatus = orderStatus;
		this.personDetails = personDetails;
	}
	
	
	
    
}
