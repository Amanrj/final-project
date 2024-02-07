package com.example.demo.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.BookingDetails;

public interface BookingDetailsDao extends JpaRepository<BookingDetails, Integer> {
 
}
