import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from './orders';
@Injectable({
  providedIn: 'root'
})
export class CustserviceService {
  constructor(private http: HttpClient) {}

  registerCustomer(customerData: any): any {
    return this.http.post("http://localhost:9095/register", customerData);
  }

  getAllCustomers(): any {
    return this.http.get('http://localhost:9095/getAllCustomers');
  }

  addOrder(customerId: number, formData: any): any {
    return this.http.post(`http://localhost:9095/orders/${customerId}`, formData);
  }
  getCustomersByVillage(village: string): Observable<any> {
    return this.http.get<any>(`http://localhost:9095/getCustomersByVillage/${village}`);
  }

  getOrdersByCustomerId(customerId: number): Observable<Orders[]> {
    return this.http.get<Orders[]>(`http://localhost:9095/orders/customer/${customerId}`);
  }
  getAllOrders(): Observable<Orders[]> {
    return this.http.get<Orders[]>("http://localhost:9095/orders/getAllOrders");
  }

  getOrdersById(customerId:number):any{
    return this.http.get(`http://localhost:9095/orders/customer/${customerId}`);
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(`http://localhost:9095/orders/${orderId}`);
  }
}
