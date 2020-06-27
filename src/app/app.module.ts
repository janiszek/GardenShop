import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products-main/products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NG_VALIDATORS, FormsModule } from '@angular/forms';
import { AppMinValueDirective, AppMaxValueDirective, AppValidProductNameDirective } from './Services/custom-validators';
import { ProductsMainComponent } from './products-main/products-main.component';
import { AddeditproductComponent } from './products-main/addeditproduct/addeditproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    AddeditproductComponent,
    AboutusComponent,
    PagenotfoundComponent,
    AppValidProductNameDirective,
    AppMinValueDirective,
    AppMaxValueDirective,
    ProductsMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: NG_VALIDATORS, useExisting: AppValidProductNameDirective, multi: true},
    {provide: NG_VALIDATORS, useExisting: AppMinValueDirective, multi: true},
    {provide: NG_VALIDATORS, useExisting: AppMaxValueDirective, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
