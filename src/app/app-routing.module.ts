import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrderPageComponent } from './components/order-page/order-page.component';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'Order', component: OrderPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
