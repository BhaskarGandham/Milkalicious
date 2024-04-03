import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardData = [
    { imageUrl: 'assets/images/farm.jpeg' },
    { imageUrl: 'assets/images/Mahisa (a borrowed cow).jpeg' },
    { imageUrl: 'assets/images/milk11.gif' },
    { imageUrl: 'assets/images/truck.jpeg'}
  ];
 
  videoData = [
    { videoUrl: 'assets/images/InShot_20240314_144133892.mp4' },
   
    // Add more video objects as needed
  ]

  constructor(private router: Router) {}

  goToProductsPage() {
    this.router.navigate(['/products']);
  }

}
