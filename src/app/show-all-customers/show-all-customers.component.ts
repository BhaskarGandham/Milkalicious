import { Component, OnInit } from '@angular/core';
import { CustserviceService } from '../custservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-all-customers',
  templateUrl: './show-all-customers.component.html',
  styleUrl: './show-all-customers.component.css'
})
export class ShowAllCustomersComponent implements OnInit {
    customer:any
    constructor(private service:CustserviceService, private router:Router){
    
    }
    ngOnInit(): void {
      this.service.getAllCustomers().subscribe((data:any)=>{
        this.customer=data;
        console.log(data); 
        });
      }
    }

