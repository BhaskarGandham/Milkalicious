package com.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Customer;
import com.model.Orders;

@Service
public class OrdersDAO {
    
	@Autowired
    private OrdersRepo ordersRepo;

    @Autowired
    private CustomerDAO customerDAO; // Autowire CustomerDAO to fetch customer details

    public void addOrder(int customerId, Orders order) {
        Customer customer = customerDAO.getCustomerById(customerId); // Fetch customer details by ID
        order.setCustomer(customer); // Set customer for the order
        ordersRepo.save(order); // Save the order
    }
    public List<Orders> getOrdersByCustomerId(int customerId) {
    	 return ordersRepo.findByCustomerId(customerId);
    }

	public List<Orders> getAllOrders() {
		return ordersRepo.findAll();
	}
	public void deleteOrder(Long orderId) {
        ordersRepo.deleteById(orderId);
    }
	
    
}