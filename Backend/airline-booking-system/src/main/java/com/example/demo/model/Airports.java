package com.example.demo.model;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
public class Airports {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer airpotId;
	
	private String city;
    private String airport;
    private String code;
    private String country;
    
	public Integer getAirpotId() {
		return airpotId;
	}
	public void setAirpotId(Integer airpotId) {
		this.airpotId = airpotId;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAirport() {
		return airport;
	}
	public void setAirport(String airport) {
		this.airport = airport;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	@Override
	public String toString() {
		return "Airports [airpotId=" + airpotId + ", city=" + city + ", airport=" + airport + ", code=" + code
				+ ", country=" + country + "]";
	}
	public Airports(Integer airpotId, String city, String airport, String code, String country) {
		super();
		this.airpotId = airpotId;
		this.city = city;
		this.airport = airport;
		this.code = code;
		this.country = country;
	}
	@Override
	public int hashCode() {
		return Objects.hash(airport, airpotId, city, code, country);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Airports other = (Airports) obj;
		return Objects.equals(airport, other.airport) && Objects.equals(airpotId, other.airpotId)
				&& Objects.equals(city, other.city) && Objects.equals(code, other.code)
				&& Objects.equals(country, other.country);
	}
	public Airports() {
		super();
		// TODO Auto-generated constructor stub
	}

    
    
    

}
