package com.dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.model.Customer;
@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer>{
	Optional<Customer> findByVillage(String village);

	@Query("select e from Customer e where e.phonenumber = :phonenumber AND e.password = :password")
	Customer validateCustLogin(@Param("phonenumber")String phonenumber,@Param("password") String password);
	
}
