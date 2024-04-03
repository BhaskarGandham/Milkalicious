package com.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Customer {
	@Id
	@GeneratedValue
private int id;
private String firstname;
private String lastname;
private String village;
private String phonenumber;
private  String password;
private String address;

@JsonIgnore
@OneToMany(mappedBy = "customer")
List<Orders> orderList = new ArrayList<>();

public Customer() {}

public Customer(int id, String firstname, String lastname, String village, String phonenumber, String password,
		String address) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.village = village;
	this.phonenumber = phonenumber;
	this.password = password;
	this.address = address;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getLastname() {
	return lastname;
}
public void setLastname(String lastname) {
	this.lastname = lastname;
}
public String getVillage() {
	return village;
}
public void setVillage(String village) {
	this.village = village;
}
public String getPhonenumber() {
	return phonenumber;
}
public void setPhonenumber(String phonenumber) {
	this.phonenumber = phonenumber;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
public List<Orders> getOrderList() {
    return orderList;
}

public void setOrderList(List<Orders> orderList) {
    this.orderList = orderList;
}
@Override
public String toString() {
	return "Customer [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", village=" + village
			+ ", phonenumber=" + phonenumber + ", password=" + password + ", address=" + address + "]";
}

}
