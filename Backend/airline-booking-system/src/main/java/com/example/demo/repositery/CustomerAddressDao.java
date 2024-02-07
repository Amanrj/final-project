package com.example.demo.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.CustomerAddress;

public interface CustomerAddressDao extends JpaRepository<CustomerAddress, Integer> {
 
}
