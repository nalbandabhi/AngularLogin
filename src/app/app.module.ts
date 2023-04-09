import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CustRegistrationComponent } from './components/cust-registration/cust-registration.component';
import { CustLoginComponent } from './components/cust-login/cust-login.component';
import { BillerLoginComponent } from './components/biller-login/biller-login.component';
import { BillRegistrationComponent } from './components/bill-registration/bill-registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotpassComponent } from './components/forgotpass/forgotpass.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustRegistrationComponent,
    CustLoginComponent,
    BillerLoginComponent,
    BillRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ForgotpassComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
