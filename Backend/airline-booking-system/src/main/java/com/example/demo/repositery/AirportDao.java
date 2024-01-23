package com.example.demo.repositery;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Airports;

public interface AirportDao extends JpaRepository<Airports, Integer> {
	
	 @Query("SELECT a FROM Airports a " +
	            "WHERE LOWER(a.city) LIKE LOWER(CONCAT('%', :searchTerm, '%')) " +
	            "   OR LOWER(a.airport) LIKE LOWER(CONCAT('%', :searchTerm, '%')) " +
	            "   OR LOWER(a.code) LIKE LOWER(CONCAT('%', :searchTerm, '%')) " +
	            "   OR LOWER(a.country) LIKE LOWER(CONCAT('%', :searchTerm, '%'))")
	    List<Airports> findByAllFields(String searchTerm);

}
