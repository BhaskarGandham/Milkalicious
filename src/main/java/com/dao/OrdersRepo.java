package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.model.Orders;

@Repository
public interface OrdersRepo extends JpaRepository<Orders, Long> {
    List<Orders> findByCustomerId(int customerId);
}
