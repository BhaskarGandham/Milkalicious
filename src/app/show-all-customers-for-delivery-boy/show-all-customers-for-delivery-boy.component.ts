import { Component } from '@angular/core';
import { CustserviceService } from '../custservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-customers-for-delivery-boy',
  templateUrl: './show-all-customers-for-delivery-boy.component.html',
  styleUrls: ['./show-all-customers-for-delivery-boy.component.css']
})
export class ShowAllCustomersForDeliveryBoyComponent {
  customers: any;
  orders: any[] = [];
  selectedCustomerId: number = 0;
  constructor(private service: CustserviceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers(): void {
    this.service.getAllCustomers().subscribe(
      (data: any) => {
        this.customers = data;
      },
      (error: any) => {
        console.error('Error fetching customers:', error);
      }
    );
  }

  showOrders(customerId: number): void {
    this.selectedCustomerId = customerId; // Set the selectedCustomerId
    this.service.getOrdersByCustomerId(customerId).subscribe(
      (orders: any[]) => {
        console.log('Orders for customer with ID', customerId, ':', orders);
        this.orders = orders;
      },
      (error: any) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  goBack(): void {
    // Reset selectedCustomerId and orders array
    this.selectedCustomerId = -1;
    this.orders = [];
  }
}
