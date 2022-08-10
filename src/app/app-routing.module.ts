import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BillingComponent } from './billing/billing.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{
  path : '',
  component : HomeComponent
},
{
  path : 'billing',
  component : BillingComponent
},
{
  path : 'products',
  component : ProductsComponent
},
{
  path : 'account',
  component : AccountComponent
}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
