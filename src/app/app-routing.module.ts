import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products-main/products/products.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddeditproductComponent } from './products-main/addeditproduct/addeditproduct.component';


const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id/edit', component: AddeditproductComponent},
  {path: 'addnew', component: AddeditproductComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
