package com.ts;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.CustomerDAO;
import com.model.Customer;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CustomerController {
    
	@Autowired
	private CustomerDAO custDao;
	
	@PostMapping("register")
    public void register(@RequestBody Customer customer) {
        System.out.println("Data Received: "+ customer);
        custDao.register(customer);
    }
	
	@GetMapping("getAllCustomers")
	public  List<Customer> getAllCustomers(){
		List<Customer> eList = custDao.getAllCustomers();
		System.out.println(eList);
		return eList;
	}
	
	@GetMapping("getCustomerById/{id}")
	public  Customer getCustomerById(@PathVariable int id){
		return custDao.getCustomerById(id);
	}
	
	@DeleteMapping("deleteCustomerById/{id}")
	public  Customer deleteCustomerById(@PathVariable int id){
		return custDao.deleteCustomerById(id);
	}
	
	@GetMapping("getCustomersByVillage/{village}")
    public Customer getCustomersByVillage(@PathVariable String village) {
        return custDao.getCustomerByVillage(village);
    }
	 
	@GetMapping("validateCustomer/{phonenumber}/{password}")
	public Customer validateCustomer(@PathVariable String phonenumber, @PathVariable String password){
		return custDao.getValidateCustomer(phonenumber, password);
	}
	
	}