import { Component, OnInit } from '@angular/core';
import { CustserviceService } from '../custservice.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-show-all-orders',
  templateUrl: './show-all-orders.component.html',
  styleUrl: './show-all-orders.component.css'
})
export class ShowAllOrdersComponent implements OnInit{
  orders: Orders[] = [];

  constructor(private service: CustserviceService) {}

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(
      (data: Orders[]) => {
        this.orders = data;
        console.log(data);
      },
      (error: any) => {
        console.log('Error fetching orders:', error);
      }
    );
  }
}
