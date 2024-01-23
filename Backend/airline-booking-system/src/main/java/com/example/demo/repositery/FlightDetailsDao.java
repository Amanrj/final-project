package com.example.demo.repositery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.FlightData;

@Repository
public interface FlightDetailsDao extends JpaRepository<FlightData, Integer> {
	

}
