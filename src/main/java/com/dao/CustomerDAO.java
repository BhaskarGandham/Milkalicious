package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.Customer;
import com.dao.CustomerRepo;


@Service
public class CustomerDAO {
    @Autowired
    CustomerRepo customerRepo;

    public void register(Customer customer) {
        customerRepo.save(customer);
    }

    public List<Customer> getAllCustomers(){
    	return customerRepo.findAll();
    }
    
    public Customer getCustomerById(int id){
    	return customerRepo.findById(id).orElse(null);
    }
    
    public Customer deleteCustomerById(int id){
    	 customerRepo.deleteById(id);
    	 return null;
    }
  
    public Customer getCustomerByVillage(String village){
    	return customerRepo.findByVillage(village).orElse(null);
    }
    
    public Customer getValidateCustomer(String phonenumber, String password){
    	return customerRepo.validateCustLogin(phonenumber,password);
    }
    
}


