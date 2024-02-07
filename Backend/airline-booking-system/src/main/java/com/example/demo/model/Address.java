package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
class Address {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer AddreshId;
	
    private String city;
    private String state;
    private String street;
    private String zipcode;

    // Getters and setters
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

	public Integer getAddreshId() {
		return AddreshId;
	}

	public void setAddreshId(Integer addreshId) {
		AddreshId = addreshId;
	}

	@Override
	public String toString() {
		return "Address [AddreshId=" + AddreshId + ", city=" + city + ", state=" + state + ", street=" + street
				+ ", zipcode=" + zipcode + "]";
	}

	public Address(Integer addreshId, String city, String state, String street, String zipcode) {
		super();
		AddreshId = addreshId;
		this.city = city;
		this.state = state;
		this.street = street;
		this.zipcode = zipcode;
	}

	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
    
    
}
