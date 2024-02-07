package com.example.demo.repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.PersonDetails;

public interface PersonDetailsDao extends JpaRepository<PersonDetails, Integer>{

}
