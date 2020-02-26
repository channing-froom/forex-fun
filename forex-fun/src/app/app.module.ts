import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyComponent } from './currency/currency.component';
import { FooterComponent } from './footer/footer.component';
import { CurrencyCardComponent } from './currencyCard/currencyCard.component';
import { CurrencySearchFormComponent } from './currencySearchForm/currencySearchForm.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      DashboardComponent,
      CurrencyComponent,
      FooterComponent,
      CurrencyCardComponent,
      CurrencySearchFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
