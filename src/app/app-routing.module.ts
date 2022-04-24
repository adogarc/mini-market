import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

 //Import Components
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from './components/products/products.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import { CartComponent } from './components/cart/cart.component';

 const appRoutes:Routes=[
    {path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'products',component:ProductsComponent},
    {path:'tickets',component:TicketsComponent},
    {path:'categories', component:CategoriesComponent},
    {path:'users',component:UsersComponent},
    {path:'cart',component:CartComponent}
 ];
 export const AppRoutingProviders:any[]=[];
 export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);

 @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }