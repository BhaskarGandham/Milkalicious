package com.ts;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dao.OrdersDAO;
import com.model.Orders;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/orders")
public class OrdersController {

    @Autowired
    private OrdersDAO ordersDAO;

    @PostMapping("/{customerId}")
    public ResponseEntity<String> addOrderToCustomer(@PathVariable int customerId, @RequestBody Orders order) {
        ordersDAO.addOrder(customerId, order);
        return ResponseEntity.ok("{\"message\": \"Order added successfully\"}");
    }
    
    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<Orders>> getOrdersByCustomerId(@PathVariable int customerId) {
        List<Orders> orders = ordersDAO.getOrdersByCustomerId(customerId);
        if (!orders.isEmpty()) {
            return new ResponseEntity<>(orders, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/getAllOrders")
	public  List<Orders> getAllOrders(){
		List<Orders> eList = ordersDAO.getAllOrders();
		return eList;
	}
    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long orderId) {
        try {
            ordersDAO.deleteOrder(orderId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting order");
        }
    }
}
