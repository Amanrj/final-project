package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
class PersonDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer PersonDetailsId;
	
    private String age;
    private String gender;
    private String name;

    // Getters and setters
    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

	public Integer getPersonDetailsId() {
		return PersonDetailsId;
	}

	public void setPersonDetailsId(Integer personDetailsId) {
		PersonDetailsId = personDetailsId;
	}

	@Override
	public String toString() {
		return "PersonDetails [PersonDetailsId=" + PersonDetailsId + ", age=" + age + ", gender=" + gender + ", name="
				+ name + "]";
	}

	public PersonDetails(Integer personDetailsId, String age, String gender, String name) {
		super();
		PersonDetailsId = personDetailsId;
		this.age = age;
		this.gender = gender;
		this.name = name;
	}

	public PersonDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
    
}

