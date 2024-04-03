import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs'; // Import Observable

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<string>('');
  private customerId = new BehaviorSubject<number | null>(null); // Update customerId type

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isUser() {
    return this.user.asObservable();
  }


   get getCustomerId(): Observable<number | null> {
    return this.customerId.asObservable();
  }
  

  login(userType: string, customerId: number) {
    this.loggedIn.next(true);
    this.user.next(userType);
    this.customerId.next(customerId);
  }

  logout() {
    this.loggedIn.next(false);
    this.user.next('');
    this.customerId.next(null);
  }
  isAuthenticated(): boolean {
    // Your authentication logic here
    return true; // or false based on authentication status
  }
}