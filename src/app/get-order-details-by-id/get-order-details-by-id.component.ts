import { Component } from '@angular/core';
import { CustserviceService } from '../custservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-get-order-details-by-id',
  templateUrl: './get-order-details-by-id.component.html',
  styleUrl: './get-order-details-by-id.component.css'
})
export class GetOrderDetailsByIdComponent {
  customer:any
  orders: any[] = [];
  customerId: number = 0;
  isLoggedIn!:boolean;

  constructor(private service:CustserviceService, private authService:AuthService){
    this.authService.isLoggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
  ngOnInit(): void {}

  fetchOrders(): void {
    if (this.customerId !== 0) {
      this.service.getOrdersById(this.customerId).subscribe(
        (response: any) => {
          this.orders = response;
        },
        (error: any) => {
          console.error('Error fetching orders:', error);
        }
      );
    } else {
      alert('Customer ID is not provided');
    }
  }
}