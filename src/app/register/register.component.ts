import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustserviceService } from '../custservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  village: string = '';
  phonenumber: string = '';
  password: string = '';
  confirmPassword: string = ''; // Define confirmPassword property
  address: string = '';

  constructor(
    private service: CustserviceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  registration(): void {
    if (this.password !== this.confirmPassword) {
      this.openSnackBar('Passwords do not match');
      return;
    }

    const customerData = {
      firstname: this.firstname,
      lastname: this.lastname,
      village: this.village,
      phonenumber: this.phonenumber,
      password: this.password,
      address: this.address
    };

    this.service.registerCustomer(customerData).subscribe(
      (data: any) => {
        console.log(data);
        this.openSnackBar('Registration successful!');
        this.router.navigate(['login']);
      },
      (error: any) => {
        console.error('Error during registration:', error);
        this.openSnackBar('Error during registration');
      }
    );
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });
  }
}
