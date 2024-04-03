import { Component } from '@angular/core';
import { CustserviceService } from '../custservice.service';
import { AuthService } from '../auth.service';
import { Product } from '../product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[];
  customerId: number | null = null;
  currentDate: string = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

  constructor(
    private custService: CustserviceService,
    private authService: AuthService,
    private snackBar:MatSnackBar
  ) {
    this.products = [
            { id: 1, name: "Cow Milk", imgsrc: "assets/images/cowMilk.png",quant:"450 ml", quantity: 0, price: 35, customerId: this.customerId },
      { id: 2, name: "Low Fat Cow Milk", imgsrc: "assets/images/lowfatcowmilk.png",quant:"450 ml", quantity: 0, price: 30, customerId: this.customerId },
      { id: 3, name: "Buffalo Milk", imgsrc: "assets/images/buffalowmilk.png",quant:"450 ml", quantity: 0, price: 36, customerId: this.customerId },
      { id: 4, name: "Curd", imgsrc: "assets/images/curd.png",quant:"450 ml", quantity: 0, price: 34, customerId: this.customerId },
      { id: 5, name: "Low Fat Curd", imgsrc: "assets/images/lowfatcurd.png" ,quant:"450 ml", quantity: 0, price: 30, customerId: this.customerId },
      { id: 6, name: "Panner", imgsrc: "assets/images/panner.png",quant:"200 gm", quantity: 0, price: 90, customerId: this.customerId },
      { id: 7, name: "Badam Milk", imgsrc: "assets/images/badam milk.png" ,quant:"250 ml", quantity: 30, price: 30, customerId: this.customerId },
      { id: 8, name: "Lassi", imgsrc: "assets/images/lassi.png",quant:"200 ml", quantity: 0, price: 20, customerId: this.customerId },
     
    ];

    this.authService.getCustomerId.subscribe((customerIds) => {
      this.customerId = customerIds;
    });
  }


  increaseQuantity(product: any) {
    product.quantity++;
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  calculateTotalPrice(product: any): number {
    const quantity = product.quantity;
    const price = product.price;
    const startDate = new Date(product.startDate);
    const endDate = new Date(product.endDate);
    const daysDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)); 

    let subscriptionMultiplier: number;
    switch (product.subscriptionType) {
      case 'daily':
        subscriptionMultiplier = daysDifference;
        break;
      case 'alternate':
        subscriptionMultiplier = Math.ceil(daysDifference / 2);
        break;
      case 'one-time':
        subscriptionMultiplier = 1;
        break;
      default:
        subscriptionMultiplier = 0;
    }

    return quantity * price * subscriptionMultiplier;
  }

  updateMinEndDate(product: Product): void {
    if (product.endDate && product.startDate > product.endDate) {
      product.endDate = '';
    }
  }

  getMinEndDate(product: Product): string {
    if (product.startDate) {
      const minDate = new Date(product.startDate);
      minDate.setDate(minDate.getDate() + 1);
      return minDate.toISOString().split('T')[0];
    }
    return '';
  }

  addOrder(product: any) {
    if (this.customerId !== null) {
      const totalPrice = this.calculateTotalPrice(product); 
      const formData = {
        productId: product.id,
        customerId: this.customerId,
        quantity: product.quantity,
        subscriptionType: product.subscriptionType,
        startDate: product.startDate,
        endDate: product.endDate,
        totalPrice:totalPrice,
      };

      this.custService.addOrder(this.customerId, formData).subscribe(
        (response: any) => {
          this.openSnackBar('Order added successfully');
        },
        (error: any) => {
          this.openSnackBar('Failed to add order');
        }
      );
    } else {
      this.openSnackBar('Please login first!');
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, 
      verticalPosition: 'top', 
      panelClass: ['custom-snackbar'] 
    }).onAction().subscribe(() => {
      this.snackBar.dismiss();
    });
  }
}