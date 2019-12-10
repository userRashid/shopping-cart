import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { SortByComponent } from './components/sortby/sortby.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchComponent } from './components/search/search.component';
import { CheckoutComponent } from './views/checkout/checkout.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { AddMoreComponent } from './components/add-more/add-more.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    SortByComponent,
    ProductComponent,
    HeaderComponent,
    CartComponent,
    SearchComponent,
    CheckoutComponent,
    ProductListComponent,
    AddMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
