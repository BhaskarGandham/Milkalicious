import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MilkComponent } from './milk/milk.component';
import { AdminComponent } from './admin/admin.component';


import { ShowAllCustomersComponent } from './show-all-customers/show-all-customers.component';
import { WalletDueComponent } from './wallet-due/wallet-due.component';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ShowAllOrdersComponent } from './show-all-orders/show-all-orders.component';
import { GetOrderDetailsByIdComponent } from './get-order-details-by-id/get-order-details-by-id.component';

import { FaqsComponent } from './faqs/faqs.component';
import { HelpComponent } from './help/help.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeliveryboyComponent } from './deliveryboy/deliveryboy.component';
import { ShowAllCustomersForDeliveryBoyComponent } from './show-all-customers-for-delivery-boy/show-all-customers-for-delivery-boy.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login/register',component:RegisterComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},  
  {path:'products',component:ProductsComponent},
  {path:'milk',component:MilkComponent},
  {path:'admin',component:AdminComponent},
  {path:'walletdue',component:WalletDueComponent},
  {path:'adminhome',component:AdminComponent},
  {path:'show-all-customers',component:ShowAllCustomersComponent},
  {path:'add-to-cart',component:AddToCartComponent},
  {path:'show-all-orders',component:ShowAllOrdersComponent},
  {path:'getorderbyid',component:GetOrderDetailsByIdComponent},

  {path:'faqs',component:FaqsComponent},
  {path:'help',component:HelpComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'terms',component:TermsComponent},
  {path:'aboutus',component:AboutUsComponent},

  {path:'customerlist',component:ShowAllCustomersComponent},
  {path:'deliveryboy',component:DeliveryboyComponent},
  {path:'deliveryboycustomers',component:ShowAllCustomersForDeliveryBoyComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
