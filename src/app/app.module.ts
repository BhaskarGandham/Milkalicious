import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { MilkComponent } from './milk/milk.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminComponent } from './admin/admin.component';
import { ShowAllCustomersComponent } from './show-all-customers/show-all-customers.component';
import { FooterComponent } from './footer/footer.component';
import { WalletDueComponent } from './wallet-due/wallet-due.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ShowAllOrdersComponent } from './show-all-orders/show-all-orders.component';
import { GetOrderDetailsByIdComponent } from './get-order-details-by-id/get-order-details-by-id.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaddingtopComponent } from './paddingtop/paddingtop.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { HelpComponent } from './help/help.component';
import { FaqsComponent } from './faqs/faqs.component';
import { DeliveryboyComponent } from './deliveryboy/deliveryboy.component';
import { ShowAllCustomersForDeliveryBoyComponent } from './show-all-customers-for-delivery-boy/show-all-customers-for-delivery-boy.component';
import { PasswordValidatorDirective } from './password-validator.directive';
import { PhonenumberDirective } from './phonenumber.directive';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ProductsComponent,
    MilkComponent,
    AdminComponent,
    ShowAllCustomersComponent,
    FooterComponent,
    WalletDueComponent,
    AddToCartComponent,
    ShowAllOrdersComponent,
    GetOrderDetailsByIdComponent,
    AboutUsComponent,
    PaddingtopComponent,
    PrivacyComponent,
    TermsComponent,
    HelpComponent,
    FaqsComponent,
    DeliveryboyComponent,
    ShowAllCustomersForDeliveryBoyComponent,
    PasswordValidatorDirective,
    PhonenumberDirective,
    CartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
