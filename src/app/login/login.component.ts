import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustserviceService } from '../custservice.service';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent implements OnInit {

  customers: any;
  admin: { phone: string, password: string,id:number }[];
  deliveryBoy: {phone: string, password: string,id:number}[]; 

  constructor(private router: Router, private service: CustserviceService, private authService: AuthService, private snackBar:MatSnackBar) {
    this.admin = [{ phone: 'admin', password: 'admin',id:1 }],
    this.deliveryBoy=[{phone:'boy',password:'boy',id:1}];

  }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((data: any) => {
      this.customers = data;
    });
  }

  loginValidate(form: any) {
    let isCredentialsValid = false;
    for (let admin of this.admin) {
      if (form.mobile === admin.phone && form.password === admin.password) {
        this.openSnackBar("Login successful, welcome Admin");
        this.authService.login('admin',admin.id);
        this.router.navigate(['adminhome']);
        isCredentialsValid = true;
        break;
      }

    }

    for (let boy of this.deliveryBoy) {
      if (form.mobile === boy.phone && form.password === boy.password) {
        this.openSnackBar("Login successful, welcome Delivery Boy");
        this.authService.login('boy',boy.id);
        this.router.navigate(['deliveryboy']);
        isCredentialsValid = true;
        break;
      }
    }
    if (!isCredentialsValid) {
      for (let customer of this.customers) {
        if (form.mobile === customer.phonenumber && form.password === customer.password) {
          this.openSnackBar("Login successful, welcome " + customer.firstname + ' ' + customer.lastname);
          this.authService.login('customer',customer.id);
          this.router.navigate(['home']);
          isCredentialsValid = true;
          break;
        }
      }
    }

    if (isCredentialsValid) {
      
    } else {
      this.openSnackBar("Invalid credentials");
      console.log('Invalid credentials');
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