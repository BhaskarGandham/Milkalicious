import { Component, OnInit } from '@angular/core';
import { Orders } from '../orders';
import { AuthService } from '../auth.service';
import { CustserviceService } from '../custservice.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  orders: Orders[] = [];

  productNames: { [key: number]: string } = {
    1: 'Cow Milk of 450ml',
    2: 'Low Fat Cow Milk of 450ml',
    3: 'Buffalo Milk of 450ml',
    4: 'Curd of 450ml',
    5: 'Low Fat Curd of 450ml',
    6: 'Panner of 200gm',
    7: 'Badam Milk of 250ml',
    8: 'Lassi of 200ml'
  };
  productPrices: { [key: number]: number } = {
    1: 35, 
    2: 30, 
    3: 36,
    4: 34,
    5: 30,
    6: 90,
    7: 30,
    8: 20,   
  };

  constructor(
    private custService: CustserviceService,
    private authService: AuthService
  ) {
    
  }



  ngOnInit(): void {
    this.authService.getCustomerId.subscribe(
      (customerId: number | null) => {
        if (customerId) {
          this.custService.getOrdersByCustomerId(customerId).subscribe(
            (data: Orders[]) => {
              this.orders = data;
            },
            (error: any) => {
              console.log('Error fetching orders:', error);
            }
          );
        }
      },
      (error: any) => {
        console.log('Error fetching customer ID:', error);
      }
    );
  }


  getProductName(productId: number): string {
    return this.productNames[productId] || 'Unknown Product';
  }

  deleteOrder(orderId: number): void {
    this.custService.deleteOrder(orderId).subscribe(
      () => {
        this.orders = this.orders.filter(order => order.id !== orderId);
      },
      (error: any) => {
        console.log('Error deleting order:', error);
      }
    );
  }


  calculateTotalCost(order: Orders): void {
    console.log('Calculating total cost for order:', order);
    const productPrice = this.productPrices[order.productId] || 0;
    const numDays = order.numDays ?? 1; 
    console.log('Product price:', productPrice);
    console.log('Number of days:', numDays);
    let subscriptionMultiplier = 1;
    switch (order.subscriptionType) {
      case 'daily':
        subscriptionMultiplier = 1;
        break;
      case 'alternate':
        subscriptionMultiplier = 2; 
        break;
      case 'weekly':
        subscriptionMultiplier = 7;
        break;
      case 'one-time':
        subscriptionMultiplier = 1; 
        break;
      default:
        subscriptionMultiplier = 1;
        break;
    }
    console.log('Subscription multiplier:', subscriptionMultiplier);
  }
}
